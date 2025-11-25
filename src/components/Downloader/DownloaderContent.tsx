import { FormDownload } from "../Form/FormDownload";

interface DownloaderContentProps {
    handleUrl: (url: string) => void;
}

export const DownloaderContent = ({ handleUrl }: DownloaderContentProps) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl w-full flex flex-col items-center gap-6">

                <h1 className="
          text-center font-bold tracking-wide
          text-xl sm:text-3xl 
          text-gray-900 dark:text-gray-100
        ">
                    Télécharger des vidéos YouTube ou des reels Instagram
                </h1>

                <FormDownload onSubmitUrl={handleUrl} />
            </div>
        </div>
    );
};
