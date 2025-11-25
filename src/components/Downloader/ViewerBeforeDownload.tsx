import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import constantUrl from "../../constants/constantUrl";
import { useState, useEffect } from "react";
import { LoadingMessage } from "../Loader/LoadingMessage";

interface ViewerBeforeDownloadProps {
    onDownload: (url: string) => void;
    onReset: () => void;          // 👈 ajout important
    targetUrl: string;
}

export const ViewerBeforeDownload = ({ targetUrl, onDownload, onReset }: ViewerBeforeDownloadProps) => {
    const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [filename, setFilename] = useState<string>("video.mp4");

    const { mutateAsync, isPending, isError, error } = useMutation({
        mutationFn: async (url: string) =>
            await axios.post(`${constantUrl.URL_API}/download`, { url }, { responseType: "blob" }),

        onSuccess: (response) => {
            const disposition = response.headers["content-disposition"];
            let name = "video.mp4";

            if (disposition) {
                const match = disposition.match(/filename="(.+)"/);
                if (match) name = match[1];
            }

            const blob = new Blob([response.data], { type: "video/mp4" });
            const objectUrl = URL.createObjectURL(blob);

            setVideoBlob(blob);
            setPreviewUrl(objectUrl);
            setFilename(name);
        }
    });

    useEffect(() => {
        mutateAsync(targetUrl);
    }, [targetUrl]);

    const handleSaveFile = () => {
        if (!videoBlob) return;

        const url = URL.createObjectURL(videoBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);

        onDownload(targetUrl);
    };

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center text-red-600 dark:text-red-400 px-4 gap-4">
                <h2 className="text-2xl font-semibold">Erreur</h2>
                <p>{(error as any)?.response?.data?.detail || "Une erreur est survenue."}</p>

                <button
                    onClick={onReset}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl mt-4"
                >
                    Télécharger une autre vidéo
                </button>
            </div>
        );
    }

    if (isPending || !previewUrl) {
        return (
            <div className="flex flex-col items-center justify-center px-4 gap-4">
                <h2 className="text-2xl text-center font-semibold dark:text-gray-100">
                    Vidéo détectée
                </h2>
                <LoadingMessage label="Chargement de l’aperçu..." />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 px-4 gap-6">
            <h2 className="text-2xl font-semibold">
                Aperçu <span className="text-blue-700">{filename}</span>
            </h2>

            <video controls className="rounded-xl max-w-md h-96">
                <source src={previewUrl} type="video/mp4" />
            </video>

            <button
                onClick={handleSaveFile}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
            >
                Télécharger maintenant
            </button>

            {/* 👇 Le bouton pour revenir au formulaire */}
            <button
                onClick={onReset}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition mt-2"
            >
                Télécharger une autre vidéo
            </button>
        </div>
    );
};
