'use client'
import React, { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Harmony application?",
            answer:
                "Harmony application is curated with the idea of providing you your own mental health space where you can access free resources to review your own mental health such as mental health continuum, mood tracker, journal; you get access to licensed mental health care providers and book a mental health consultation from the comfort of your home.",
        },
        {
            question: "Can I use Harmony Therapy world services even without booking a session?",
            answer:
                "Yes, you can download Harmony application for free and there are many free resources that you can use to support your mental health journey at zero cost. You don’t have to book a session until you feel the need to do so.",
        },
        {
            question: "Can I reschedule my session?",
            answer:
                "Yes, you can reschedule a session 48 hours prior to the booked slot. You can simply go to (information on steps to reschedule to be filled by Shubham’s team).",
        },
        {
            question: "What if I missed my session?",
            answer:
                "There is no refund for any missed session. No show for any session will be considered a taken slot of the concerned clinician and cannot be refunded.",
        },
        {
            question: "Can I cancel my session?",
            answer:
                "Once booked, cancellation of session is not possible at the moment. However, you can reschedule a session 48 hours prior to the booked slot.",
        },
        {
            question: "What if I forgot about my appointment?",
            answer:
                "We at Harmony Therapy World will send you an email notification at the time of booking. In addition a notification reminder will be sent 10 minutes prior to your appointment and at the time of appointment. Once the Clinician activates a call, you will receive in – app call from your concerned clinician. However, to avoid any last moment challenges, we advise you to keep the app notification on and you may also set personal reminders.",
        },
    ];

    return (
        <div className="px-4 py-10 md:pt-0 pt-10 mt-16 md:pt-0 md:px-16 bg-white rounded-3xl">
            <h1 className="text-3xl font-bold text-center mb-8 md:pt-8">Frequently Asked <span className="text-[#33C9D2]">Questions</span></h1>
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full text-left px-4 py-3 bg-white shadow-md rounded-md focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <span className={`float-right transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-4 py-3 border-l-2 border-blue-300">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
