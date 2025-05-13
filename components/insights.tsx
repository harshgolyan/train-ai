import Image from "next/image"

const insightsCardArray = [
    {
        image: "/blob1.avif",
        tag: "Business",
        heading: "How to Integrate AI into Business Strategies With Efficiency",
        subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction."
    },
    {
        image: "/blob2.avif",
        tag: "Business",
        heading: "How to Integrate AI into Business Strategies With Efficiency",
        subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction."
    },
    {
        image: "/blob3.avif",
        tag: "Business",
        heading: "How to Integrate AI into Business Strategies With Efficiency",
        subheading: "As AI technology evolves, businesses must adapt their strategies to incorporate these advancements. This integration can lead to significant improvements in operational efficiency and customer satisfaction."
    },
]
export default function Insights() {
  return (
    <>
        <div className="flex flex-col justify-center items-center mb-60">
            <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl sm:px-6 px-2 py-2 w-fit uppercase">READ</div>
            <div className='lg:text-[5rem] text-[3rem] font-semibold max-w-7xl leading-[5rem] py-6 text-center'>Insights & AI Innovations</div>
            <div className='text-[1.2rem] font-medium max-w-xl text-center'>Stay ahead of the curve with our latest insights on AI training, model optimization, and industry breakthroughs.</div>
            <div className="flex lg:flex-row flex-col items-center gap-10 py-10">
                {insightsCardArray.map((card, idx) => (
                    <InsightsCard key={idx} image={card.image} tag={card.tag} heading={card.heading} subheading={card.subheading} />
                ))}
            </div>
            <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-12 py-4 w-fit uppercase">Discover All Our Articles</div>
        </div>
    </>
  )
};

function InsightsCard({image, tag, heading, subheading}: {
    image: string,
    tag: string,
    heading: string,
    subheading: string
}) {
    return (
        <>
            <div className="flex flex-col gap-4 bg-neutral-900 rounded-2xl sm:px-4 px-2 py-8 text-gray-400">
                <div className="flex justify-center">
                    <Image src={image} alt="blob1" height={100} width={100} className="sm:h-[12rem] sm:w-[12rem] h-[8rem] w-[8rem]" />
                </div>
                <div className="font-medium text-[1.2rem]">{tag}</div>
                <div className="sm:text-[2rem] text-[1.5rem] font-semibold text-white max-w-sm">{heading}</div>
                <div className="sm:text-[1.2rem] text-[0.8rem] font-medium max-w-sm">{subheading}</div>
            </div>
        </>
    )
}
