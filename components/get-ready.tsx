"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GetReady() {
  return (
    <>
        <div className='flex lg:justify-between flex-col sm:px-40 px-8 gap-40 items-center mb-60'>
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
                    <Image src="/circle.avif" alt="circle" height={400} width={400} className="sm:min-h-[25rem] sm:min-w-[25rem] min-h-[20rem] min-w-[20rem]" />
                </motion.div>
                <div>
                    <input type="text" placeholder="Enter your email" className="px-4 py-6 w-full rounded-xl border border-gray-400" />
                </div>
                <div>
                    <button className="px-14 py-5 rounded-xl lg:w-fit w-full bg-[var(--primary)]">
                        Subscribe Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:items-start items-center">
                <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit uppercase lg:text-left text-center">Get Ready</div>
                <div className='lg:text-[5rem] text-[3rem] font-semibold max-w-7xl leading-[5rem] py-6 lg:text-left text-center'>Stay Ahead of AI Innovations</div>
                <div className='text-[1.2rem] font-medium max-w-xl lg:text-left text-center'>Join our exclusive newsletter for the latest breakthroughs, trends, and AI training insights.</div>
            </div>
        </div>
    </>
  )
}
