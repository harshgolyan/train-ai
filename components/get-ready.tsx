"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GetReady() {
  return (
    <>
        <div className='flex justify-between px-40 gap-40 items-center mb-60'>
            <div className="flex flex-col gap-5">
                <motion.div
                    initial={{
                        rotateZ:0
                    }}
                    animate={{
                        rotateZ: -360
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                >
                    <Image src="/circle.avif" alt="circle" height={400} width={400} className="min-h-[25rem] min-w-[25rem]" />
                </motion.div>
                <div>
                    <input type="text" placeholder="Enter your email" className="px-4 py-6 w-full rounded-xl border border-gray-400" />
                </div>
                <div>
                    <button className="px-14 py-5 rounded-xl bg-[var(--primary)]">
                        Subscribe Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit uppercase text-left">Get Ready</div>
                <div className='text-[5rem] font-semibold max-w-7xl leading-[5rem] py-6 text-left'>Stay Ahead of AI Innovations</div>
                <div className='text-[1.2rem] font-medium max-w-xl text-left'>Join our exclusive newsletter for the latest breakthroughs, trends, and AI training insights.</div>
            </div>
        </div>
    </>
  )
}
