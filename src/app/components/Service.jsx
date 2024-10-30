export default function Service() {
    return (
        <div className="flex flex-col justify-center bg-transparent gap-10 md:px-4 pb-10" id="services">
            <div className='w-full h-auto bg-transparent rounded-3xl text-center md:p-5 flex flex-col items-center gap-7 overflow-hidden'>
                <h1 className="font-bold text-4xl md:text-5xl">
                    Dedicated to nurturing <span className="text-[#FFA05D]">your wellbeing</span>
                </h1>
                <div className="flex items-center justify-center md:w-[66%] w-full md:h-[60vh] h-[30vh] rounded-3xl overflow-hidden bg-[url('/trustImage.png')] md:bg-contain bg-cover bg-center bg-no-repeat">
                    <div className="flex md:flex-row flex-col items-center md:justify-start justify-end text-left h-full w-full" data-aos="fade-right">
                        <div className="head-div md:w-1/2 w-full flex flex-col justify-center gap-2 rounded-3xl p-3 md:ml-5">
                            <h2 className="heading2 font-bold text-xl md:text-2xl md:px-4 text-[#FAF9F6]">Your trusted consultants</h2>
                            <p className="para text-base md:text-xl md:px-4 text-[#FAF9F6]">
                                Certified and compassionate, our trusted consultants provide expert mental health support to help you navigate challenges with integrity and care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Uncomment this section if needed */}
            {/* <div className="flex flex-col gap-10">
                <h1 className="font-bold text-4xl md:text-5xl">
                    In 2 Decades, we have <span className="text-[#33C9D2]">earned this</span>
                </h1>
                <div data-aos="zoom-in">
                    <TestimonialCrousal />
                </div>
            </div> */}
        </div>
    );
}
