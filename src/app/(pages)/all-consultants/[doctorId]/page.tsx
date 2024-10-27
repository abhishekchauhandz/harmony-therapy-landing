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
                const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}api/get/doctor/profile/${doctorId}`;
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
                <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
            </div>
        );
    }

    if (!doctorData) {
        return <div className="flex justify-center items-center h-screen text-[#33C9D2]">No data found</div>;
    }

    return (
        <div className="flex justify-center items-center py-12 mt-10 pt-36 md:px-10 px-4 relative">
            <div className="md:w-[60%] w-full p-3 py-4 rounded-3xl flex flex-col md:gap-5 md:flex-row shadow-md hover:shadow-lg transition-shadow cursor-pointer flex bg-white">
                    <div className='flex flex-col  md:w-[320px] h-[350px]'>
                        <div className="relative w-full h-[80%] rounded-3xl">
                            <Image
                                src="/altImage.png"
                                alt="Doctor"
                                fill
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                        </div>
                        <div className="text-center mt-3">
                            <h3 className="text-sm md:text-xl font-bold text-gray-800">
                                {doctorData.doctorName || doctorData.username}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {doctorData.role}
                            </p>
                        </div>
                    </div>
                    <div className="px-4 md:w-1/2 w-full flex flex-col gap-5 md:mt-5">
                        <h2 className="font-bold text-2xl text-[#33C9D2] text-center">Details</h2>
                        <div className="grid grid-cols-2 gap-y-4 md:gap-x-8 gap-x-0">

                            {/* Gender */}
                            <div className="col-span-1">
                                <p className="text-gray-700 font-medium">Gender:</p>
                            </div>
                            <div className="col-span-1">
                                <p>{doctorData.gender}</p>
                            </div>

                            {/* Status */}
                            <div className="col-span-1">
                                <p className="text-gray-700 font-medium">Status:</p>
                            </div>
                            <div className="col-span-1">
                                <p>{doctorData.status}</p>
                            </div>

                            {/* Max Education */}
                            <div className="col-span-1">
                                <p className="text-gray-700 font-medium">Max. Education:</p>
                            </div>
                            <div className="col-span-1">
                                <p>{doctorData.maximumEducation}</p>
                            </div>

                            {/* Price per session */}
                            <div className="col-span-1">
                                <p className="text-gray-700 font-medium">Price per session:</p>
                            </div>
                            <div className="col-span-1">
                                <p>{doctorData.pricePerSession}</p>
                            </div>

                            {/* Experience */}
                            <div className="col-span-1">
                                <p className="text-gray-700 font-medium">Experience:</p>
                            </div>
                            <div className="col-span-1">
                                <p>{doctorData.experience}</p>
                            </div>
                            <Link href="#"><button className='py-3 px-4 bg-[#FFA05D] rounded-3xl mt-4 text-white'>Book a session</button></Link>
                        </div>
                    </div>
                </div>
            <div className=" items-center justify-center gap-10 md:py-0 py-5">
                
            </div>
        </div>
    );
};

export default StaffDetail;
