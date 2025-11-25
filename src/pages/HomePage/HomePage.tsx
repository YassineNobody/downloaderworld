import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DownloaderContent } from "../../components/Downloader/DownloaderContent";
import { ViewerBeforeDownload } from "../../components/Downloader/ViewerBeforeDownload";

export const HomePage = () => {
  const [url, setUrl] = useState<string>("");

  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="flex-1 bg-white dark:bg-blue-950 flex flex-col items-center justify-center px-4 pb-10">
      <AnimatePresence mode="wait">
        {!url ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <DownloaderContent handleUrl={(u) => setUrl(u)} />
          </motion.div>
        ) : (
          <motion.div
            key="viewer"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ViewerBeforeDownload
              targetUrl={url}
              onReset={() => setUrl("")}
              onDownload={(u) => console.log("Start download for:", u)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
