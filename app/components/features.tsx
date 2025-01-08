import Image from "next/image";

export default function Features() {
  return (
    <section className="px-5 flex flex-col items-center py-20 xl:py-32 gap-10" >
      <h2 className="text-4xl font-bold xl:text-6xl" data-aos="fade-up" data-aos-delay="100">Key Features</h2>
      <ul className="flex flex-col items-center gap-10 md:px-36 lg:flex-row lg:items-stretch lg:px-5 w-full xl:px-20 xl:gap-20">
        <li className="w-full border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2 hover:border-blue-500 transition-colors xl:gap-5" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src="/chatbot.png"
            alt="Chatbot"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <h3 className="text-2xl xl:text-3xl">Customizable AI Agents</h3>
          <p className="text-xl flex-grow xl:text-2xl">Automate tasks and free up time with our smart chatbots. Let them do the hard work.</p>
          <button className="flex items-center gap-2 mt-auto bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md text-3xl">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </li>
        <li className="w-full border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2 hover:border-blue-500 transition-colors xl:gap-5" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src="/chatbot.png"
            alt="Connect"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <h3 className="text-2xl xl:text-3xl">Seamless Integrations</h3>
          <p className="text-xl flex-grow xl:text-2xl">Harness the power of AI to gain deep insights from your financial data and make strategic decisions.</p>
          <button className="flex items-center gap-2 mt-auto bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md text-3xl">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </li>
        <li className="w-full border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2 hover:border-blue-500 transition-colors xl:gap-5" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src="/chatbot.png"
            alt="Metrics"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <h3 className="text-2xl xl:text-3xl">Advanced Analytics</h3>
          <p className="text-xl flex-grow xl:text-2xl">Simplify communication, improve customer experience with innovative solutions.</p>
          <button className="flex items-center gap-2 mt-auto bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md text-3xl">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
}