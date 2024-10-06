'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import DoctorCard from '../../../../components/DoctorCard';
import Image from 'next/image';

const StaffDetail: React.FC = () => {
    const [doctorData, setDoctorData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const doctorId = params.doctorId;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `https://harmony-backend-z69j.onrender.com/api/get/doctor/profile/${doctorId}`;
                const response = await fetch(apiUrl, { headers: { 'x-api-key': apiKey } });
                const data = await response.json();
                console.log("doctor pro", data)
                setDoctorData(data?.profile);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (doctorId) {
            fetchData();
        }
    }, [doctorId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <h4 className="mx-2">Loading..</h4>
            </div>
        );
    }

    if (!doctorData) {
        return <div className="flex justify-center items-center h-screen">No data found</div>;
    }

    return (
        <div className="flex justify-center items-center py-5 w-full pt-36 md:px-10 relative">
            {/* <Link href="/all-consultants" className="absolute md:right-20 md:top-40 right-10 top-32 no-underline md:flex hidden">
                <button className='see-all w-auto'
                >
                    Go Back{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "5px" }} width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M8 2.875H2.75C2.28587 2.875 1.84075 3.07254 1.51256 3.42417C1.18437 3.77581 1 4.25272 1 4.75V14.125C1 14.6223 1.18437 15.0992 1.51256 15.4508C1.84075 15.8025 2.28587 16 2.75 16H11.5C11.9641 16 12.4092 15.8025 12.7374 15.4508C13.0656 15.0992 13.25 14.6223 13.25 14.125V8.5" stroke="#FFA05D" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12.6504L12.875 4.21289" stroke="#FFA05D" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.625 1H15V5.6875" stroke="#FFA05D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </Link> */}
            <div className="flex md:flex flex-col md:flex-row items-center gap-10 md:py-0 py-5">
                <div className="rounded-3xl p-3 m-2 w-[300px] h-[320px] shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between bg-white">
                    <div className="relative w-full h-[80%] rounded-3xl">
                        <Image
                            src="/altImage.png" 
                            alt="Doctor"
                            fill
                            objectFit='cover'
                        />
                    </div>
                    <div className="text-center mt-3">
                        <h3 className="text-sm md:text-xl font-bold text-gray-800">
                        {doctorData.name || doctorData.doctorName}
                        </h3>
                        <p className="text-sm text-gray-600">
                        {doctorData.role}
                        </p>
                    </div>
                </div>
                <div className="md:px-10 px-0 md:w-[400px] w-full flex flex-col justify-between">
                    <h6 className="font-bold text-3xl text-[#33C9D2] mb-10 text-center">Details</h6>
                    <div className="grid grid-cols-2 gap-y-4 md:gap-x-8">
                        {/* Email */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Email:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.email}</p>
                        </div>

                        {/* Gender */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Gender:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.gender}</p>
                        </div>

                        {/* Status */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Status:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.status}</p>
                        </div>

                        {/* Max Education */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Max. Education:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.maximumEducation}</p>
                        </div>

                        {/* Price per session */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Price per session:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.pricePerSession}</p>
                        </div>

                        {/* Experience */}
                        <div className="md:col-span-1">
                            <p className="text-gray-700 font-medium">Experience:</p>
                        </div>
                        <div className="md:col-span-1">
                            <p>{doctorData.experience}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaffDetail;
