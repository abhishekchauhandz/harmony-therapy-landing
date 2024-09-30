'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import TestimonialCard from '../../../src/components/Testimonials'


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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(768); 

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

       
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            setWindowWidth(window.innerWidth);
        }
        
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const nextTestimonials = () => {
        if (currentIndex + 3 < testimonials.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevTestimonials = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const testimonialsToShowCount = windowWidth < 768 ? 1 : 3;
    const testimonialsToShow = testimonials.slice(currentIndex, currentIndex + testimonialsToShowCount);


    return (
        <div className="flex flex-col justify-center bg-transparent gap-10 px-4 pb-10">
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
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 justify-center items-center relative">
                    <div className="absolute md:absolute md:left-0 md:transform md:-translate-x-1/4 left-0 cursor-pointer transform -translate-x-1/2 translate-y-1/2"  onClick={prevTestimonials}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="transform rotate-180 md:w-[60px] md-h-[60px] w-[40px] h-[40px]">
                            <path d="M29.9987 0.833008C29.3629 0.833008 28.7387 0.838841 28.1262 0.847591L26.3295 0.897175L25.4574 0.935091L23.7687 1.03426L22.1558 1.16842C8.19953 2.52176 2.52078 8.20051 1.16745 22.1568L1.03328 23.7697L0.934115 25.4584C0.919531 25.7443 0.904948 26.0359 0.896198 26.3305L0.846615 28.1272L0.834948 29.0547L0.832031 29.9997C0.832031 30.6355 0.837865 31.2597 0.846615 31.8722L0.896198 33.6688L0.934115 34.5409L1.03328 36.2297L1.16745 37.8426C2.52078 51.7988 8.19953 57.4776 22.1558 58.8309L23.7687 58.9651L25.4574 59.0643C25.7433 59.0788 26.0349 59.0934 26.3295 59.1022L28.1262 59.1518L29.9987 59.1663L31.8712 59.1518L33.6679 59.1022L34.5399 59.0643L36.2287 58.9651L37.8416 58.8309C51.7979 57.4776 57.4766 51.7988 58.8299 37.8426L58.9641 36.2297L59.0633 34.5409C59.0779 34.2551 59.0924 33.9634 59.1012 33.6688L59.1508 31.8722L59.1654 29.9997L59.1508 28.1272L59.1012 26.3305L59.0633 25.4584L58.9641 23.7697L58.8299 22.1568C57.4766 8.20051 51.7979 2.52176 37.8416 1.16842L36.2287 1.03426L34.5399 0.935091C34.2493 0.920902 33.9586 0.908263 33.6679 0.897175L31.8712 0.847591L30.9437 0.835924L29.9987 0.833008ZM25.0199 19.1876C25.5222 18.6854 26.1904 18.3837 26.8992 18.3392C27.608 18.2946 28.3088 18.5102 28.8699 18.9455L29.1441 19.1876L37.8941 27.9376C38.3963 28.4398 38.698 29.108 38.7425 29.8169C38.7871 30.5257 38.5715 31.2264 38.1362 31.7876L37.8941 32.0618L29.1441 40.8118C28.6192 41.3349 27.9149 41.6386 27.1742 41.6612C26.4336 41.6838 25.712 41.4236 25.1562 40.9335C24.6004 40.4434 24.252 39.7601 24.1817 39.0225C24.1114 38.2848 24.3246 37.548 24.7779 36.9618L25.0199 36.6876L31.7049 29.9997L25.0199 23.3118C24.5178 22.8095 24.2161 22.1413 24.1715 21.4325C24.127 20.7237 24.3425 20.0229 24.7779 19.4618L25.0199 19.1876Z" fill="#33C9D2" />
                        </svg>
                    </div>

                    {testimonialsToShow.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            review={testimonial.review}
                            rating={testimonial.rating}
                        />
                    ))}
                    <div className="absolute right-0 cursor-pointer transform translate-x-1/2 translate-y-1/3" onClick={nextTestimonials}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="md:w-[60px] md-h-[60px] w-[40px] h-[40px]">
                            <path d="M29.9987 0.833008C29.3629 0.833008 28.7387 0.838841 28.1262 0.847591L26.3295 0.897175L25.4574 0.935091L23.7687 1.03426L22.1558 1.16842C8.19953 2.52176 2.52078 8.20051 1.16745 22.1568L1.03328 23.7697L0.934115 25.4584C0.919531 25.7443 0.904948 26.0359 0.896198 26.3305L0.846615 28.1272L0.834948 29.0547L0.832031 29.9997C0.832031 30.6355 0.837865 31.2597 0.846615 31.8722L0.896198 33.6688L0.934115 34.5409L1.03328 36.2297L1.16745 37.8426C2.52078 51.7988 8.19953 57.4776 22.1558 58.8309L23.7687 58.9651L25.4574 59.0643C25.7433 59.0788 26.0349 59.0934 26.3295 59.1022L28.1262 59.1518L29.9987 59.1663L31.8712 59.1518L33.6679 59.1022L34.5399 59.0643L36.2287 58.9651L37.8416 58.8309C51.7979 57.4776 57.4766 51.7988 58.8299 37.8426L58.9641 36.2297L59.0633 34.5409C59.0779 34.2551 59.0924 33.9634 59.1012 33.6688L59.1508 31.8722L59.1654 29.9997L59.1508 28.1272L59.1012 26.3305L59.0633 25.4584L58.9641 23.7697L58.8299 22.1568C57.4766 8.20051 51.7979 2.52176 37.8416 1.16842L36.2287 1.03426L34.5399 0.935091C34.2493 0.920902 33.9586 0.908263 33.6679 0.897175L31.8712 0.847591L30.9437 0.835924L29.9987 0.833008ZM25.0199 19.1876C25.5222 18.6854 26.1904 18.3837 26.8992 18.3392C27.608 18.2946 28.3088 18.5102 28.8699 18.9455L29.1441 19.1876L37.8941 27.9376C38.3963 28.4398 38.698 29.108 38.7425 29.8169C38.7871 30.5257 38.5715 31.2264 38.1362 31.7876L37.8941 32.0618L29.1441 40.8118C28.6192 41.3349 27.9149 41.6386 27.1742 41.6612C26.4336 41.6838 25.712 41.4236 25.1562 40.9335C24.6004 40.4434 24.252 39.7601 24.1817 39.0225C24.1114 38.2848 24.3246 37.548 24.7779 36.9618L25.0199 36.6876L31.7049 29.9997L25.0199 23.3118C24.5178 22.8095 24.2161 22.1413 24.1715 21.4325C24.127 20.7237 24.3425 20.0229 24.7779 19.4618L25.0199 19.1876Z" fill="#33C9D2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
