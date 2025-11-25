export const AboutPage = () => {
    return (
        <div className="flex-1 bg-white dark:bg-blue-950 px-6 py-12 flex flex-col items-center">

            <div className="max-w-3xl w-full flex flex-col gap-10">

                {/* HEADER */}
                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        À propos de <span className="text-blue-600">Downloader</span>
                        <span className="text-blue-400">World</span>
                    </h1>

                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
                        Votre outil simple, rapide et gratuit pour télécharger des vidéos en ligne.
                    </p>
                </header>

                {/* SECTION 1 */}
                <section className="bg-gray-100 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Notre mission
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        DownloaderWorld a été conçu pour offrir une expérience fluide et efficace
                        aux utilisateurs souhaitant télécharger des vidéos YouTube ou des reels Instagram.
                        Pas de publicité intrusive, pas de limites cachées : un outil simple, propre et fiable.
                    </p>
                </section>

                {/* SECTION 2 */}
                <section className="bg-gray-100 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Comment ça fonctionne ?
                    </h2>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed list-disc list-inside">
                        <li>Vous collez le lien de la vidéo YouTube ou Instagram.</li>
                        <li>Nous analysons automatiquement le contenu.</li>
                        <li>Vous visualisez un aperçu avant téléchargement.</li>
                        <li>Vous choisissez de télécharger la vidéo en un clic.</li>
                    </ul>
                </section>

                {/* SECTION 3 */}
                <section className="bg-gray-100 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Respect et sécurité
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        DownloaderWorld ne stocke aucune vidéo ni aucun lien. Toutes les opérations
                        sont réalisées en temps réel, et les fichiers sont transmis directement à
                        votre appareil sans sauvegarde sur nos serveurs.
                    </p>
                </section>

                {/* SECTION 4 */}
                <section className="bg-gray-100 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Une application en évolution
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Nous prévoyons d’ajouter prochainement de nouvelles fonctionnalités :
                    </p>

                    <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mt-2">
                        <li>Téléchargement audio uniquement (MP3).</li>
                        <li>Choix de la qualité (720p, 1080p, 4K quand disponible).</li>
                        <li>Support d'autres plateformes (TikTok, Twitter, Facebook).</li>
                    </ul>
                </section>
            </div>

        </div>
    );
};
