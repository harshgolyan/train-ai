"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navbarItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Solution",
        url: "/solution",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Contact",
        url: "/contact",
    }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6 relative">
                <div className="absolute -top-70 left-0 w-full h-[25rem] bg-[var(--primary)] mask-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] z-0 pointer-events-none"></div>
                <div className="uppercase text-2xl md:text-4xl font-bold flex items-center gap-5">
                    <Zap className="text-[var(--primary)]" fill="var(--primary)" size={30} />
                    Train<span className="text-[var(--primary)]">●</span>Ai
                </div>
                <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
                    {navbarItems.map((item, idx) => (
                        <Link key={idx} href={item.url} className="px-6 py-2 rounded-full hover:bg-white hover:text-[var(--primary)]" >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:block">
                    <motion.button
                        initial={{
                            scale: 1,
                            backgroundColor: "var(--primary)",
                        }}
                        whileHover={{
                            scale: 0.9,
                            backgroundColor: "var(--secondary)",
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="px-8 py-3 rounded-lg text-white"
                    >
                        Get Started
                    </motion.button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-3/4 bg-black text-white z-50 shadow-lg p-6"
                    >
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="mt-10 flex flex-col gap-6 text-lg font-semibold">
                            <div>Home</div>
                            <div>About</div>
                            <div>Solution</div>
                            <div>Blog</div>
                            <div>Contact</div>
                            <motion.button
                                whileHover={{
                                    scale: 0.95,
                                    backgroundColor: "var(--secondary)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="mt-4 px-6 py-3 rounded-lg text-white bg-[var(--primary)]"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
