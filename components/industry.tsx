import Image from "next/image"

const industryImages = [
    "/training/logo_1.svg",
    "/training/logo_2.svg",
    "/training/logo_3.svg",
    "/training/logo_4.svg",
    "/training/logo_5.svg",
    "/training/logo_6.svg"
]
export default function Industry() {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-6 mb-60">
            <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit uppercase">Trusted by Industry Leaders</div>
            <div className='lg:text-[5rem] text-[3rem] font-semibold max-w-7xl leading-[5rem] py-6 text-center'>We collaborate with the best tech industries</div>
            <div className='text-[1.2rem] font-medium max-w-xl text-center'>Join the top innovators using our AI models to revolutionize their industries.</div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:gap-20 gap-10 mx-4">
                {industryImages.map((image, idx) => (
                    <Image key={idx} src={image} alt="logo" height={400} width={200}/>
                ))}
            </div>
            <div>
                <button className="bg-[var(--primary)] rounded-xl px-10 py-4 font-medium my-20">Join Them</button>
            </div>
        </div>
    </>
  )
}
