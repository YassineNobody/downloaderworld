import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormDownloadProps {
    onSubmitUrl: (url: string) => void;
}

export const FormDownload = ({ onSubmitUrl }: FormDownloadProps) => {
    const [customError, setCustomError] = useState<string | null>(null);

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<{ url: string }>();

    const handleCheckUrl = (url: string) => {
        const lower = url.toLowerCase();

        const isYoutube =
            lower.includes("youtube.com") || lower.includes("youtu.be");
        const isInstagram = lower.includes("instagram.com");

        if (isYoutube || isInstagram) return true;

        setCustomError("L'URL doit provenir de YouTube ou Instagram.");
        return false;
    };

    const onSubmit = (data: { url: string }) => {
        setCustomError(null);

        if (!handleCheckUrl(data.url)) return;

        onSubmitUrl(data.url);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
        >
            <div className="flex flex-col w-full">

                <input
                    type="text"
                    placeholder="Colle ici l'URL de la vidéo…"
                    className="
            w-full px-4 py-3 rounded-xl text-sm
            bg-white/70 dark:bg-slate-800/60 
            border border-gray-300 dark:border-slate-600 
            shadow-sm
            focus:outline-none focus:ring-2 
            focus:ring-blue-500 dark:focus:ring-blue-400
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            transition-all
          "
                    {...register("url", {
                        required: { value: true, message: "L'URL est obligatoire." },
                        pattern: {
                            value: /^https?:\/\/.+/,
                            message: "L'URL doit commencer par http:// ou https://.",
                        },
                    })}
                />

                {/* ERREUR React Hook Form */}
                {errors.url && (
                    <p className="text-sm text-red-500 mt-1 text-center py-2">
                        {errors.url.message}
                    </p>
                )}

                {/* ERREUR validation personnalisée */}
                {customError && !errors.url && (
                    <p className="text-sm text-red-500 mt-1 py-2 text-center">{customError}</p>
                )}
            </div>

            <button
                type="submit"
                className="
          w-full py-3 rounded-xl text-sm font-semibold
          bg-blue-600 hover:bg-blue-700 
          dark:bg-blue-500 dark:hover:bg-blue-600
          text-white shadow-md transition-colors
        "
            >
                Télécharger
            </button>
        </form>
    );
};
