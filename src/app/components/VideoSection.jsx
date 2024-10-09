import VideoPlayerWithThumbnail from "../../components/VideoPlayerWithThumbnail";

export default function VideoSection() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8 md:py-5 py-20 md:pb-10">
                <div>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[montserrat]" data-aos="fade-up">
                    One <span className="text-[#33C9D2]">Video</span>, says it all
                </h1>
                <p className="mt-2">disclaimer – <i>video credits remains with publisher, we are using videos for educational purposes</i></p>
                </div>
                <div className="w-full h-auto max-w-[1068px] lg:h-[598px]" data-aos="zoom-in">
                    <VideoPlayerWithThumbnail
                        url='https://www.youtube.com/watch?v=n549SkI_87I'
                        thumbnailUrl='/videothumbnail.png'
                    />
                </div>
            </div>
        </>
    )
}
