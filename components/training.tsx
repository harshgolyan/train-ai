
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
]
export default function Training() {
  return (
    <>
        <div className='flex justify-between items-center mx-20 mb-60'>
            <div>
                <div className='border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit'>TRAIN LIKE A BEAST</div>
                <div className='text-[5rem] font-semibold max-w-3xl leading-[5rem] py-6'>Why Our AI Trainers Make a Difference</div>
                <div className='text-[1.2rem] font-medium max-w-xl'>AI training shouldn’t be a bottleneck—it should be an accelerator. Our models are built for efficiency, precision, and scalability, helping you achieve faster training times, reduced costs, and higher accuracy. Whether you&apos;re optimizing large-scale machine learning pipelines or fine-tuning models for specific applications, our technology ensures maximum performance with minimal resources.</div>
            </div>
            <div className='grid grid-cols-2 gap-20 mask-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_95%)] z-0 pointer-events-none'>
                {trainingCards.map((card, idx) => (
                    <TrainingCard key={idx} heading={card.heading} subheading={card.subheading} />
                ))}
            </div>
        </div>
    </>
  )
};

function TrainingCard({heading, subheading}: {
    heading: string;
    subheading: string;
}) {
    return (
        <>
            <div className='flex flex-col p-6 bg-orange-950 rounded-xl'>
                <div className='text-[4rem] font-semibold leading-[5rem] py-6'>{heading}</div>
                <div className='text-[1.2rem] font-medium'>{subheading}</div>
            </div>
        </>
    )
}