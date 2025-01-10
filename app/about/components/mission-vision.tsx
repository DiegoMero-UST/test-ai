import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="pt-52 pb-20 px-5 xl:pt-64">
      <h2 className="text-5xl font-bold text-center mb-8" data-aos="fade-up" data-aos-delay="100">
        About Us
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-16 lg:flex-row lg:gap-5">
        {/* Mission Section */}
        <div className="md:px-20 lg:px-0" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Mission
          </h2>
          <div className="p-5 flex flex-col items-center border-2 border-gray-600 rounded-lg">
            <Image
              src="/mission-image.png"
              alt="Our Mission Visualization"
              width={100}
              height={100}
            />
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              To revolutionize business efficiency through cutting-edge AI solutions,
              making advanced automation accessible to organizations of all sizes.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="md:px-20 lg:px-0" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Vision
          </h2>
          <div className="p-5 flex flex-col items-center border-2 border-gray-600 rounded-lg">
            <Image
              src="/vision-image.png"
              alt="Our Vision Visualization"
              width={100}
              height={100}
            />
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              To be the global leader in AI-driven business solutions, creating a future where
              every organization can harness the full potential of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}