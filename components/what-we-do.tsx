"use client";
import {
    Clock,
    SignalHigh,
    Compass,
    Info,
    Database,
    FileText,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const WhatWeDoArray = [
    {
        icon: <Clock size={60} className="text-[var(--primary)]" />,
        heading: "Training AI is Expensive & Time-Consuming",
        subheading:
            "Our optimized models reduce training time and computational costs by up to 60%, making AI development more accessible.",
    },
    {
        icon: <SignalHigh size={60} className="text-[var(--primary)]" />,
        heading: "Data Quality Limits AI Performance",
        subheading:
            "We leverage high-quality, expertly curated datasets to train our AI models, ensuring precision, fairness, and adaptability across industries.",
    },
    {
        icon: <Compass size={60} className="text-[var(--primary)]" />,
        heading: "Scaling AI Requires Complex Infrastructure",
        subheading:
            "Our AI models are designed for seamless scalability, running efficiently on both cloud-based and on-premise infrastructures.",
    },
    {
        icon: <Database size={60} className="text-[var(--primary)]" />,
        heading: "Keeping Up with AI Advancements is Challenging",
        subheading:
            "Stay ahead with our continuously evolving AI models, designed for cutting-edge applications in various industries.",
    },
    {
        icon: <Info size={60} className="text-[var(--primary)]" />,
        heading: "AI Models Struggle to Adapt to New Data",
        subheading:
            "With automated retraining pipelines and self-improving algorithms, our models evolve alongside your business, ensuring long-term accuracy.",
    },
    {
        icon: <FileText size={60} className="text-[var(--primary)]" />,
        heading: "Lack of Explainability and Trust in AI Decisions",
        subheading:
            "We develop AI models with explainability at their core, integrating interpretable architectures and transparent reporting.",
    },
];
export default function WhatWeDo() {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        return () => {
            ref.current = null;
        }
    }, [inView, controls]);

    return (
        <>
            <div className="flex flex-col justify-center items-center mb-60">
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
                    className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2"
                >
                    What We Do
                </motion.div>
                <motion.div
                    ref={ref}
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
                    className="lg:text-[5rem] text-[3rem] font-semibold max-w-2xl text-center leading-[5rem] py-6"
                >
                    Your AI models deserve better
                </motion.div>
                <motion.div
                    ref={ref}
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
                    className="text-[1.2rem] font-medium dark:text-gray-200 text-gray-600 max-w-2xl text-center"
                >
                    Building AI is challenging, but it shouldn’t be a roadblock.
                    We solve the biggest hurdles in AI training—so you can focus
                    on innovation, not limitations.
                </motion.div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 py-10 px-2">
                    {WhatWeDoArray.map((card, idx) => (
                        <WhatWeDoCard
                            key={idx}
                            icon={card.icon}
                            heading={card.heading}
                            subheading={card.subheading}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function WhatWeDoCard({
    icon,
    heading,
    subheading,
}: {
    icon: React.ReactNode;
    heading: string;
    subheading: string;
}) {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
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
            className="flex flex-col gap-8 items-center text-center sm:px-6 px-3 py-10 rounded-xl dark:bg-slate-950 bg-slate-200"
        >
            <div>{icon}</div>
            <div className="text-[2rem] font-semibold max-w-xs dark:text-white text-gray-800">
                {heading}
            </div>
            <div className="font-medium max-w-sm dark:text-gray-200 text-gray-600 leading-[2rem]">
                {subheading}
            </div>
        </motion.div>
    );
}
