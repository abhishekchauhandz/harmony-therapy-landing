import Image from "next/image";

export default function Features() {
    return (
        <>
            <div>
                <h1 className="font-bold text-3xl md:text-5xl text-center">Costs <span className="text-[#33C9D2]">0</span> at <span className="text-[#33C9D2]">Harmony Therapy</span></h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center py-10 space-y-10 md:space-y-0">
                    <div className="relative flex-shrink-0 pt-20">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <Image src='/modal.png' width={320} height={412} className="absolute left-20 bottom-20" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Mood Journal & Tracker 😊</h1>
                        <p className="text-xl font-medium mt-5">The Mood Journal & Tracker is your personal companion for understanding and enhancing your emotional well-being. By logging your feelings daily, you can gain valuable insights into your mood patterns and triggers. Use this tool to reflect on your emotions, jot down significant events, and track how your mood changes over time.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center py-10 space-y-10 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Your Personal <span className="text-[#33C9D2]">Mental Health Continuum</span></h1>
                        <p className="text-xl font-medium mt-5">Your Personal Mental Health Continuum is a vital tool designed to help you visualize and understand your emotional well-being over time. This dynamic framework allows you to assess where you currently stand on your mental health journey and identify areas for growth and improvement.</p>
                    </div>
                    <div className="relative flex-shrink-0 pb-10">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <Image src='/modal1.png' width={616} height={411} className="absolute right-30 bottom-20" />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center py-10 space-y-10 md:space-y-0">
                    <div className="relative flex-shrink-0 pt-20 mt-20">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <Image src='/modal2.png' width={397} height={514} className="absolute left-30 bottom-20" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Access to All <span className="text-[#33C9D2]">Personalized Resources</span></h1>
                        <p className="text-xl font-medium mt-5">Access to All Personalized Resources empowers you to take charge of your mental health journey with a wealth of tailored tools and information at your fingertips. Our platform offers a curated selection of resources designed to meet your unique needs, helping you navigate your emotional landscape effectively.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center py-10 space-y-10 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Quick & Encrypted 🔒 <span className="text-[#33C9D2]">Personal Journal</span></h1>
                        <p className="text-xl font-medium mt-5">Your Personal Mental Health Continuum is a vital tool designed to help you visualize and understand your emotional well-being over time. This dynamic framework allows you to assess where you currently stand on your mental health journey and identify areas for growth and improvement.</p>
                    </div>
                    <div className="relative flex-shrink-0 pb-10">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <Image src='/modal3.png' width={514} height={412} className="absolute right-25 top-0" />
                    </div>

                </div>
            </div>
        </>
    )
}