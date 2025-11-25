import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"


export const Layout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-blue-950 flex flex-col relative">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
            <footer className="text-center text-gray-600 dark:text-gray-400 mt-6  py-2">
                © {new Date().getFullYear()} DownloaderWorld — Tous droits réservés.
            </footer>

        </div>
    )
}