import Image from "next/image";

export default function CertifiedConsultant() {
    return (
        <>
            <div className="py-20">
                <div className="w-full h-auto bg-white rounded-[25px] p-3 flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[488px] font-montserrat text-3xl font-bold">
                            <h1>Certified Consultants for all <span className="text-[#FFA05D]">Mental Health Categories</span></h1>
                        </div>
                        <button className="bg-[#FFA05D] p-3 text-base rounded-xl flex h-[50px] text-white font-bold mx-3 mt-3 md:mt-0">
                            Explore all <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="ml-3">
                                <g clipPath="url(#clip0_1554_2189)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28 5C28 4.73478 27.8947 4.48043 27.7071 4.29289C27.5196 4.10536 27.2653 4 27 4H15C14.7348 4 14.4805 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4805 5.89464 14.7348 6 15 6H24.586L4.29204 26.292C4.19907 26.385 4.12531 26.4954 4.075 26.6168C4.02468 26.7383 3.99878 26.8685 3.99878 27C3.99878 27.1315 4.02468 27.2617 4.075 27.3832C4.12531 27.5046 4.19907 27.615 4.29204 27.708C4.38502 27.801 4.4954 27.8747 4.61688 27.925C4.73835 27.9754 4.86855 28.0013 5.00004 28.0013C5.13153 28.0013 5.26173 27.9754 5.38321 27.925C5.50469 27.8747 5.61507 27.801 5.70804 27.708L26 7.414V17C26 17.2652 26.1054 17.5196 26.2929 17.7071C26.4805 17.8946 26.7348 18 27 18C27.2653 18 27.5196 17.8946 27.7071 17.7071C27.8947 17.5196 28 17.2652 28 17V5Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1554_2189">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-evenly py-2">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="w-full max-w-[387px] h-[82px] flex justify-between mb-2">
                                <Image src='/consultants/icon1.png' alt="icon" width={87} height={82} />
                                <Image src='/consultants/icon2.png' alt="icon" width={95} height={82} />
                                <Image src='/consultants/icon3.png' alt="icon" width={70} height={82} />
                                <Image src='/consultants/icon4.png' alt="icon" width={81} height={82} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
