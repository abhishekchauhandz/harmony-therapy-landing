
import Image from "next/image";
import TestimonialCrousal from '../components/TestimonialCrousal'


export default function Service() {

    return (
        <div className="flex flex-col justify-center bg-transparent gap-10 px-4 pb-10" id="services">
            <div className='w-full h-auto bg-transparent rounded-3xl text-center p-5 flex flex-col items-center gap-7'>
                <h1 className="font-bold text-4xl md:text-5xl">
                    We are committed to  <span className="text-[#FFA05D]">Your Wellbeing</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div className="flex md:flex-row flex-col justify-between text-left bg-white p-5 rounded-3xl w-full md:w-[60%] h-auto" data-aos="fade-right">
                        <div className="md:w-1/2 w-full flex flex-col gap-2">
                            <h2 className="font-bold text-xl md:text-2xl mt-4">Trusted and Certified Consultants</h2>
                            <p className="text-base md:text-xl">
                                Trusted and Certified Consultants are at the heart of our commitment to providing quality mental health support. Our network of licensed professionals is dedicated to helping you navigate your mental health challenges with expertise, compassion, and integrity.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full flex justify-center items-center md:mt-0 mt-6">
                            <div className="flex justify-center rounded-full w-[220px] h-[220px] relative">
                                <Image src='/psycho.jpg' fill objectFit="cover" className="rounded-full" alt="psychaterist"/>
                            </div>
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
