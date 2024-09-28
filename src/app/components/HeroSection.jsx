import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-[200px] md:mt-[140px] space-y-8 md:space-y-0 md:space-x-8"> {/* Increased mt on mobile */}
                    <div>
                        <div className="w-full md:w-[469px] text-center md:text-left">
                            <span className="text-3xl md:text-5xl font-bold text-[#33C9D2]">Good Balance</span>
                            <div>
                                <span className="text-3xl md:text-5xl font-bold text-[#222222]">in your </span>
                                <span className="text-3xl md:text-5xl font-bold text-[#FFA05D]">Harmony</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[420px] h-auto mt-5 text-lg md:text-xl text-[#777777] text-center md:text-left">
                            <p>Your Mental Health Good Balance</p>
                            <p>Decision which Makes your Harmony flow</p>
                            <p>in a Positive Direction</p>
                        </div>
                    </div>

                    <div className="w-full h-[300px] md:w-[640px] md:h-[433px] relative flex justify-center">
                        <Image
                            src='/hero.png'
                            fill
                            objectFit="cover"
                            alt="Hero Image"
                            sizes="(max-width: 768px) 100vw, (min-width: 769px) 640px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
