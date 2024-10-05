'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import DoctorCard from '../../../../components/DoctorCard';

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
                <div className="">
                    <DoctorCard name={doctorData.name || doctorData.doctorName} role={doctorData.role} imageUrl="/altImage.png" />
                </div>
                <div className="md:px-10 px-2 md:w-[400px] w-full flex flex-col justify-between">
                    <h6 className="font-bold text-3xl text-[#33C9D2] mb-10 text-center">Details</h6>
                    <div className="flex flex-col gap-x-4 gap-y-2">
                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Email:</p>
                            <div className='md:w-1/2'>
                                <p>{doctorData.email}</p>
                            </div>
                        </div>

                        {/* <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Contact:</p>
                            <p className='md:w-1/2'>{doctorData.contactNumber}</p>
                        </div> */}

                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Gender:</p>
                            <div className='md:w-1/2'>
                                <p>{doctorData.gender}</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Status:</p>
                            <div className='md:w-1/2'>
                                <p>{doctorData.status}</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium">Max. Education:</p>
                            <div>
                                <p>{doctorData.maximumEducation}</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Price per session:</p>
                            <div className='md:w-1/2'>
                                <p >{doctorData.pricePerSession}</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <p className="text-gray-700 font-medium md:w-1/2">Experience:</p>
                            <div className='md:w-1/2'>
                                <p >{doctorData.experience}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDetail;
