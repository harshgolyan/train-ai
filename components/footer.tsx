import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <>
            <div className="flex lg:justify-between flex-col lg:items-start items-center px-20">
                <div className="flex flex-col lg:items-start items-center gap-6">
                    <div className="uppercase text-2xl md:text-4xl font-bold flex lg:items-start items-center gap-5">
                        <Zap
                            className="text-[var(--primary)]"
                            fill="var(--primary)"
                            size={30}
                        />
                        Train<span className="text-[var(--primary)]">●</span>Ai
                    </div>
                    <div className="text-[1.2rem] font-medium max-w-md lg:text-start text-center">
                        We develop cutting-edge AI training models to accelerate
                        your innovation.
                    </div>
                    <div className="text-[1.2rem] font-medium lg:py-30 py-10">
                        harshgolyan308gmail.com
                    </div>
                </div>
                <div className="flex items-start sm:gap-40 gap-15 sm:pr-20">
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold">Sitemap</div>
                        <div>Home</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Get Ready</div>
                        <div>Let&apos;s Connect</div>
                        <div>Contact</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-semibold">Socials</div>
                        <div>Instagram</div>
                        <div>LinkedIn</div>
                        <div>X</div>
                        <div>GitHub</div>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <div className="font-semibold">Links</div>
                        <div>Lifeguide</div>
                        <div>Styling</div>
                        <div>Changelog</div>
                    </div>
                </div>
            </div>
            <div className="text-[1.5rem] font-semibold flex justify-center mb-5">
                    Developed by Harsh with <span className="animate-bounce">❣️</span>
            </div>
        </>
    );
}
