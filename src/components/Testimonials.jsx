import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi"; 

export default function TestimonialCard({ name, review, rating }) {
    return (
        <div className="bg-gradient-to-b from-[#a8edea] to-[#fed6e3] rounded-[24px] shadow-lg p-6 max-w-[388px] w-full h-[369px] flex flex-col justify-between">
            <div>
                <BiSolidQuoteAltLeft className="text-4xl text-white" />
                <h3 className="font-bold mt-2 text-2xl md:text-3xl">{name}</h3> 
                <p className="text-gray-700 mt-2 text-lg md:text-xl">
                    {review}
                </p>
            </div>
            <div className="flex justify-start mt-auto">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}
