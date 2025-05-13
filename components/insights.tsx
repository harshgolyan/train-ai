"use client";

import Image from "next/image";
import { motion, useAnimation, useInView, AnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const insightsCardArray = [
  {
    image: "/blob1.avif",
    tag: "Business",
    heading: "How to Integrate AI into Business Strategies With Efficiency",
    subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction.",
  },
  {
    image: "/blob2.avif",
    tag: "Business",
    heading: "How to Integrate AI into Business Strategies With Efficiency",
    subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction.",
  },
  {
    image: "/blob3.avif",
    tag: "Business",
    heading: "How to Integrate AI into Business Strategies With Efficiency",
    subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction.",
  },
];

export default function Insights() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex flex-col justify-center items-center mb-60">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0 } },
        }}
        className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl sm:px-6 px-2 py-2 w-fit uppercase"
      >
        READ
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
        className="lg:text-[5rem] text-[3rem] font-semibold max-w-7xl leading-[5rem] py-6 text-center"
      >
        Insights & AI Innovations
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
        }}
        className="text-[1.2rem] font-medium max-w-xl text-center"
      >
        Stay ahead of the curve with our latest insights on AI training, model optimization, and industry breakthroughs.
      </motion.div>
      <div className="flex lg:flex-row flex-col items-center gap-10 py-10">
        {insightsCardArray.map((card, idx) => (
          <InsightsCard
            key={idx}
            image={card.image}
            tag={card.tag}
            heading={card.heading}
            subheading={card.subheading}
            index={idx}
            controls={controls}
          />
        ))}
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } },
        }}
        className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-12 py-4 w-fit uppercase"
      >
        Discover All Our Articles
      </motion.div>
    </div>
  );
}

function InsightsCard({
  image,
  tag,
  heading,
  subheading,
  index,
  controls,
}: {
  image: string;
  tag: string;
  heading: string;
  subheading: string;
  index: number;
  controls: AnimationControls;
}) {
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.6 + index * 0.2 },
        },
      }}
      className="flex flex-col gap-4 bg-neutral-900 rounded-2xl sm:px-4 px-2 py-8 text-gray-400"
    >
      <div className="flex justify-center">
        <Image
          src={image}
          alt="blob"
          height={100}
          width={100}
          className="sm:h-[12rem] sm:w-[12rem] h-[8rem] w-[8rem]"
        />
      </div>
      <div className="font-medium text-[1.2rem]">{tag}</div>
      <div className="sm:text-[2rem] text-[1.5rem] font-semibold text-white max-w-sm">{heading}</div>
      <div className="sm:text-[1.2rem] text-[0.8rem] font-medium max-w-sm">{subheading}</div>
    </motion.div>
  );
}
