import React from "react";

export default function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-60">
                <div className="border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl px-6 py-2 w-fit uppercase">
                    Contact
                </div>
                <div className="text-[5rem] font-semibold max-w-3xl leading-[5rem] py-6 text-center">
                    Let’s Build the Future of AI Together
                </div>
                <div className="text-[1.2rem] font-medium max-w-2xl text-center">
                    Whether you need custom AI training solutions, scalable models, or expert guidance, we’re here to help. Get in touch and let’s unlock the next stage of AI innovation—together.
                </div>
                <div>
                    <button className="px-14 py-5 rounded-xl hover:bg-[var(--primary)] hover:text-white border border-[var(--primary)] text-[var(--primary)] font-medium my-6 transition duration-300">
                        Have a project ? Let&apos;s talk
                    </button>
                </div>
            </div>
        </>
    );
}
