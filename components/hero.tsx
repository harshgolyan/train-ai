"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-20 mb-16">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="uppercase px-6 py-2 rounded-xl border border-[var(--primary)] text-[var(--primary)] text-sm tracking-[0.1rem]"
                >
                    ai trainer model solutions
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                    className="lg:text-[5rem] text-[3rem] font-semibold text-center max-w-5xl bg-gradient-to-r from-white to-[var(--primary)] text-transparent bg-clip-text leading-[5rem] py-6"
                >
                    Unlock the Full Potential of Your AI Models
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.4
                    }}
                    className="text-[1.2rem] font-medium text-center dark:text-gray-300 text-gray-600 max-w-xl py-6"
                >
                    We develop cutting-edge AI training models to accelerate
                    your innovation. Smarter, faster, and more efficient AI
                    starts here.
                </motion.div>
                <div>
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.6
                        }}
                        className="px-12 py-4 border border-[var(--primary)] rounded-2xl font-medium hover:bg-[var(--primary)] transition duration-300"
                    >
                        Get Started
                    </motion.button>
                </div>
                <motion.div
                    initial={{
                        rotateZ: 0,
                    }}
                    animate={{
                        rotateZ: 360,
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }}
                    className="py-10"
                >
                    <Image
                        src="/ball.avif"
                        alt="ball"
                        height={300}
                        width={300}
                        className="lg:h-[40rem] lg:w-[40rem] md:h-[30rem] md:w-[30rem]"
                    />
                </motion.div>
            </div>
        </>
    );
}
