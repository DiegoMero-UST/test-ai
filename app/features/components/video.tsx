import Image from "next/image";

export default function Video() {
  return (
    <section className="flex flex-col items-center gap-4 p-5 py-10 xl:gap-10">
      <h2 className="text-4xl font-bold text-center xl:text-6xl">Watch Agentify.AI in Action</h2>
      <p className="text-lg text-center xl:text-2xl">Learn how Agentify.AI can help you automate your business processes.</p>
      {/* <video width="320" height="240" controls preload="none">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video> */}
      <Image src="/video.png" alt="Video" width={1000} height={1000} className="object-contain" />

    </section>
  );
}