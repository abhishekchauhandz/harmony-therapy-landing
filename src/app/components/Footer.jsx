import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full h-auto bg-[#f9f4f2]">
                <div className="px-4 md:px-10 lg:px-36 py-10 flex flex-col justify-evenly gap-10">

                    {/* <div className="flex flex-col md:flex-row md:justify-between md:gap-6">
                        <div className="flex justify-center items-center mb-8 md:mb-0">
                            <Image src='/logo.png' width={150} height={150} alt="Logo" />
                        </div>

                        <div className="flex flex-col justify-center gap-3 mb-8 md:mb-0 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold">Stay in the loop</h1>
                            <p className="text-base font-medium">Be the first to get updates on our latest content, special offers, and new features.</p>
                            <p className="text-sm">
                                By signing up, you&apos;re agreeing to receive marketing emails from Headspace. You can unsubscribe at any time. For more details, check out our <Link href='/privacy-policy' className="underline">Privacy Policy</Link>.
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <form className="flex flex-col md:flex-row gap-3 md:gap-10">
                                <input
                                    placeholder="Email address"
                                    className="rounded-xl px-5 py-2 w-full md:w-auto"
                                />
                                <button className="px-5 py-2 bg-[#111111] rounded-3xl text-white text-lg md:text-xl">Subscribe</button>
                            </form>
                        </div>
                    </div> */}



                    <div className="flex flex-col md:flex-row">

                        <div className="flex flex-wrap justify-between w-full md:w-[60%] gap-8 md:gap-6">
                            <div className="flex justify-center items-center mb-8 md:mb-0">
                                <Image src='/logo.png' width={200} height={200} alt="Logo" />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Important Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li>About Headspace</li>
                                    <li>Leadership</li>
                                    <li>Press</li>
                                    <li>Careers</li>
                                    <li>Partnership request</li>
                                    <li>Sleep App</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Quick Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li>Help</li>
                                    <li>Contact Us</li>
                                    <li>Mental health resources</li>
                                    <li>Accessibility</li>
                                    <li>Security</li>
                                    <li>Cookie policy</li>
                                    <li><Link href='/privacy-policy' className="underline">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex flex-wrap justify-between w-full md:w-[40%] gap-8 md:gap-0">
                            <div className="flex flex-col items-center md:items-start ml-0 md:ml-28 md:mt-0 mt-5">
                                <h1 className="text-lg md:text-xl font-bold">My Headspace</h1>
                                <button className="px-3 mt-5 py-2 bg-[#111111] rounded-3xl text-white text-base">Login</button>
                            </div>

                            <div className="flex flex-col items-center md:items-start md:mt-0 mt-5">
                                <h1 className="text-lg md:text-xl font-bold">Get the app</h1>
                                <div className="mt-5">
                                    <Image src="/playstore.png" width={120} height={40} alt="Playstore" />
                                </div>
                                <div className="mt-5">
                                    <Image src="/applestore.png" width={120} height={40} alt="App Store" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
