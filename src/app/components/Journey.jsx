import Image from "next/image";

export default function JourneyWithHarmony() {
    return (
        <>
            <div className="flex justify-center py-10 px-4">
                <div className="w-full h-auto bg-white rounded-[25px] text-center p-5 flex flex-col gap-5">
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                        Start your journey with  <span className="text-[#33C9D2]">Harmony</span>
                    </h1>
                    <p className="text-base md:text-lg md:px-16">
                        Achieve mental well-being with Harmony, your go-to platform for transformative growth. With expert guidance, personalized tools, and seamless access to licensed therapists, Harmony empowers you to understand your emotions, track your journey, and take control of your mental health. Start your journey to a balanced, harmonious state of mind today—where every step is a step closer to the best version of you.

                    </p>
                    <div className="flex items-center justify-center" data-aos="zoom-in">
                        <Image
                            src='/journey.gif'
                            width={501}
                            height={462}
                            className="w-full h-auto max-w-[501px]"
                            alt="Journey with Harmony"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
