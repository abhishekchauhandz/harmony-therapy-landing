import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full h-auto bg-white">
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



                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex md:flex-col items-start justify-between mb-8 md:mb-0 md:w-1/4">
                            <Link href="#">
                                <Image src='/logo.png' width={150} height={150} alt="Logo" />
                            </Link>
                            <p className="text-[12px] w-1/2 md:w-full mt-0 md:mt-2">
                                Harmony was created with the vision to have a trusted mental health platform where individuals across borders can seek reliable mental health services from licensed professionals offering evidence-based practices.
                            </p>
                        </div>
                        {/* <div className="flex flex-wrap justify-evenly w-full gap-8 md:gap-6">


                           
                            
                        </div> */}
                        {/* <div className="flex justify-around md:flex gap-20">
                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Important Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li><Link href="allBlogs">Blogs</Link></li>
                                    <li><Link href="/all-categories">Categories</Link></li>
                                    <li><Link href="/allArticles">All Articles</Link></li>
                                    <li><Link href="/about-us">About us</Link></li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Quick Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li><Link href="/all-consultants">All Consultants</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                    <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                                    <li><Link href="/refundPolicy">Refund Policy</Link></li>
                                    <li><Link href='/cancellationPolicy'>Cancellation policy</Link></li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="flex flex-col items-center md:items-start ml-0 md:mt-0 mt-5">
                            <h1 className="text-lg md:text-xl font-bold">Coming Soon</h1>
                            <div className="flex gap-5">
                                <div className="mt-5">
                                    <Link href="https://play.google.com/">
                                        <Image src="/playstore.png" width={120} height={40} alt="Playstore" />
                                    </Link>
                                </div>
                                <div className="mt-5">
                                    <Link href="https://www.apple.com/in/app-store/">
                                        <Image src="/applestore.png" width={120} height={40} alt="App Store" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
