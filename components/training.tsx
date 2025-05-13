"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const trainingCards = [
    {
        heading: "50%",
        subheading: "Lower Costs"
    },
    {
        heading: "5X",
        subheading: "Faster Training"
    },
    {
        heading: "98%",
        subheading: "Model Accuracy"
    },
    {
        heading: "100+",
        subheading: "Clients Worldwide"
    }
];

export default function Training() {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <>
            <div className='flex lg:flex-row lg:justify-between flex-col gap-5 items-center sm:mx-20 mx-5 mb-60'>
                <div className="flex flex-col lg:items-start lg:text-start items-center text-center">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut", delay: 0 },
                            },
                        }}
                        className='border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit'
                    >
                        TRAIN LIKE A BEAST
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                            },
                        }}
                        className='lg:text-[5rem] text-[3rem] font-semibold max-w-3xl leading-[5rem] py-6'
                    >
                        Why Our AI Trainers Make a Difference
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                            },
                        }}
                        className='text-[1.2rem] font-medium max-w-xl'
                    >
                        AI training shouldn’t be a bottleneck—it should be an accelerator.
                        Our models are built for efficiency, precision, and scalability,
                        helping you achieve faster training times, reduced costs, and higher
                        accuracy. Whether you&apos;re optimizing large-scale machine learning
                        pipelines or fine-tuning models for specific applications, our
                        technology ensures maximum performance with minimal resources.
                    </motion.div>
                </div>

                <motion.div 
                    initial={{
                        x: 0,
                        y: 0
                    }}
                    animate={{
                        x: [0, -8, 0],
                        y: [0, -8, 0]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,

                    }}
                    className='grid grid-cols-2 sm:gap-20 gap-6 mask-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_95%)] z-0 pointer-events-none'>
                    {trainingCards.map((card, idx) => (
                        <TrainingCard key={idx} heading={card.heading} subheading={card.subheading} />
                    ))}
                </motion.div>
            </div>
        </>
    );
}

function TrainingCard({ heading, subheading }: {
    heading: string;
    subheading: string;
}) {
    return (
        <div className='flex flex-col p-6 bg-orange-950 rounded-xl text-white'>
            <div className='text-[4rem] font-semibold leading-[5rem] py-6'>{heading}</div>
            <div className='text-[1.2rem] font-medium'>{subheading}</div>
        </div>
    );
}
