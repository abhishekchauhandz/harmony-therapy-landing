import Image from "next/image";
import TestimonialCard from "@/components/Testimonials";

export default function Service() {
    const testimonials = [
        {
            name: "Shubham Solanki",
            review: "I am so happy to join Harmony therapy for my Personal Mental Health issues. The doctor was awesome, even I did not spend that much in my therapy and still got the best treatments from them. Thanks to Harmony Therapy.",
            rating: 5,
        },
        {
            name: "Aman Gupta",
            review: "Harmony Therapy has been a blessing for my mental health journey. The platform offers personalized tools that helped me overcome my anxiety and build a positive outlook.",
            rating: 4,
        },
        {
            name: "Neha Sharma",
            review: "Great experience overall! The therapists are very supportive, and the platform is easy to use. I recommend Harmony Therapy to anyone struggling with mental health.",
            rating: 5,
        },
    ];

    return (
        <div className="flex flex-col justify-center bg-transparent gap-10 px-4">
            <div className='w-full h-auto bg-transparent rounded-3xl text-center p-5 flex flex-col items-center gap-7'>
                <h1 className="font-bold text-4xl md:text-5xl">
                    We are renowned for <span className="text-[#FFA05D]">what we serve</span>
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14">
                    <div className="flex flex-col gap-3 text-left bg-white p-5 rounded-3xl w-full md:w-[520px] h-auto">
                        <div className="flex justify-center">
                            <Image src='/medical-assistance.png' width={190} height={190} />
                        </div>
                        <h2 className="font-bold text-xl md:text-2xl mt-4">Trusted and Certified Consultants</h2>
                        <p className="text-base md:text-xl">
                            Trusted and Certified Consultants are at the heart of our commitment to providing quality mental health support. Our network of licensed professionals is dedicated to helping you navigate your mental health challenges with expertise, compassion, and integrity.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 text-left bg-white p-5 rounded-3xl w-full md:w-[520px] h-auto">
                        <div className="flex justify-center">
                            <Image src='/medical-assistance.png' width={190} height={190} />
                        </div>
                        <h2 className="font-bold text-xl md:text-2xl mt-4">Holistic Wellness Focus</h2>
                        <p className="text-base md:text-xl">
                            Integrative Approaches: Our consultants often incorporate holistic methods, blending traditional therapeutic techniques with mindfulness practices, cognitive-behavioral strategies, and other wellness approaches to promote overall mental health.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-4xl md:text-5xl">
                    In 2 Decades, we have <span className="text-[#33C9D2]">earned this</span>
                </h1>
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 justify-center">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            review={testimonial.review}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
