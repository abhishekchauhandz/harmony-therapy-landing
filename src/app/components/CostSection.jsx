import Image from "next/image";
import Link from "next/link";

export default function CostSection() {
    return (
        <div className="flex justify-center items-center py-24 px-0 md:px-0 md:mt-16">
            <div className="cost w-full md:w-[80%] h-[30vh] md:h-[70vh] md:rounded-3xl md:p-6 md:px-8 relative bg-[url('/mobile.png')] md:bg-contain bg-cover bg-center bg-no-repeat flex items-center justify-end" data-aos="fade-right">
                <div className="cost-div md:w-[60%] w-full h-full flex flex-col justify-center md:bg-transparent p-5 rounded-2xl">
                    <div className="head-ings md:mr-4">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-right">Costing you nothing</h1>
                        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#FFA05D] text-right">bringing pure harmony.</h2>
                    </div>

                    <p className="font-medium text-base sm:text-lg md:text-xl mt-4 md:mb-16 text-white text-right pl-5 sm:pl-10 md:pl-16 md:mr-4">Install the app for free and unlock premium resources at no cost. Connect with your therapist right here.</p>
                    
                    {/* Uncomment to add the links back */}
                    {/* <div className="flex gap-5 md:pb-5 md:mt-0 mt-10">
                        <Link href="https://play.google.com/">
                            <Image src="/playstore.png" width={120} height={40} alt="Playstore" />
                        </Link>
                        <Link href="https://www.apple.com/in/app-store/">
                            <Image src="/applestore.png" width={120} height={40} alt="App Store" />
                        </Link>
                    </div> */}
                </div>
                {/* Uncomment to add images back */}
                {/* <div className="absolute bottom-0 right-0 hidden md:block transform translate-x-10" data-aos="zoom-in">
                    <Image src="/mobilegirl.png" width={387} height={454} alt="Mobile Girl" />
                </div>
                <div className="block md:hidden mt-8 flex justify-center" data-aos="zoom-in">
                    <Image src="/mobilegirl.png" width={300} height={235} alt="Mobile Girl" />
                </div> */}
            </div>
        </div>
    );
}
