

export default function Service() {

    return (
        <div className="flex flex-col justify-center bg-transparent gap-10 px-4 pb-10" id="services">
            <div className='w-full h-auto bg-transparent rounded-3xl text-center p-5 flex flex-col items-center gap-7'>
                <h1 className="font-bold text-4xl md:text-5xl">
                    Dedicated to nurturing   <span className="text-[#FFA05D]">your wellbeing</span>
                </h1>
                <div className="flex items-center justify-center md:w-[70%] w-full h-[70vh] rounded-3xl relative overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/trustImage.png')" }}>

                   
                    <div className="absolute inset-0 left-5 flex items-center justify-left">
                        <div className="bg-black opacity-50 rounded-3xl" style={{ width: '48%', height: '50%' }}></div>
                    </div>

                   
                    <div className="relative flex md:flex-row flex-col items-center text-left p-5 z-20">
                        <div className="md:w-1/2 w-full flex flex-col gap-2">
                            <h2 className="font-bold text-xl md:text-2xl md:px-4 text-[#FAF9F6]">Your trusted consultants</h2>
                            <p className="text-base md:text-xl md:px-4 text-[#FAF9F6]">
                                Certified and compassionate, our trusted consultants provide expert mental health support to help you navigate challenges with integrity and care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
