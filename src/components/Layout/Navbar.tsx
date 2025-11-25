import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export const Navbar = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    const [open, setOpen] = useState(false);

    const links = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
    ];

    return (
        <header className="
      sticky top-0 z-50 w-full 
      backdrop-blur-xl bg-white/70 dark:bg-black/40 
      shadow-md border-b border-white/40 dark:border-white/10 
      font-montserrat
    ">
            <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-semibold tracking-wide text-gray-800 dark:text-gray-100"
                >
                    Downloader<span className="text-blue-500">World</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`
                  relative px-2 py-1 text-sm font-medium
                  transition-all duration-300
                  ${isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                    }
                `}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Theme switch + Mobile Button */}
                <div className="flex items-center gap-3">

                    {/* Theme Switcher */}
                    <button
                        onClick={toggleTheme}
                        className="
              flex items-center justify-center w-10 h-10 rounded-full border
              border-gray-300 dark:border-slate-700
              bg-gray-100 dark:bg-slate-900 
              shadow-sm hover:shadow-md transition-all duration-300
            "
                    >
                        {isDark ? (
                            <Moon className="w-5 h-5 text-blue-400" />
                        ) : (
                            <Sun className="w-5 h-5 text-amber-500" />
                        )}
                    </button>

                    {/* Burger for mobile */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition"
                    >
                        <Menu className="w-7 h-7 text-gray-800 dark:text-gray-200" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu using Headless UI */}
            {/* Mobile Menu using Headless UI */}
            <Transition show={open} as={Fragment}>
                <Dialog onClose={setOpen} className="relative z-50">

                    {/* Overlay */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40" />
                    </TransitionChild>

                    {/* Sidebar */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel
                            className="
          fixed top-0 right-0 h-full w-64 
          bg-white dark:bg-slate-900 
          shadow-2xl p-6 flex flex-col
        "
                        >

                            {/* HEADER MOBILE */}
                            <div className="flex items-center justify-between mb-8 font-montserrat">
                                <Link
                                    to="/"
                                    onClick={() => setOpen(false)}
                                    className="font-semibold tracking-wide text-gray-800 dark:text-gray-100"
                                >
                                    Downloader<span className="text-blue-500">World</span>
                                </Link>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                                >
                                    <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                                </button>
                            </div>

                            {/* LINKS MOBILE */}
                            <nav className="flex flex-col gap-4 text-lg mt-4">
                                {links.map((item) => {
                                    const isActive = location.pathname === item.to;

                                    return (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setOpen(false)}
                                            className={`
                  relative px-2 py-1 text-gray-700 dark:text-gray-200 text-sm
                  font-medium transition-all
                  ${isActive
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : "hover:text-black dark:hover:text-white"
                                                }
                `}
                                        >
                                            {item.label}

                                            {/* underline active like desktop */}
                                            {isActive && (
                                                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded-full"></span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </DialogPanel>
                    </TransitionChild>

                </Dialog>
            </Transition>

        </header>
    );
};
