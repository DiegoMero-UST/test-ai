import Image from "next/image";

export default function Features() {
  return (
    <section className="px-5 flex flex-col items-center py-20 gap-10">
      <h2 className="text-4xl font-bold">Key Features</h2>
      <ul className="flex flex-col items-center gap-10">
        <li className="border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2 ">
          <Image
            src="/chatbot.png"
            alt="Chatbot"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <h3 className="text-2xl">Customizable AI Agents</h3>
          <p className="text-lg">Automate tasks and free up time with our smart chatbots. Let them do the hard work.</p>
          <button className="flex items-center gap-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded-md text-2xl">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </li>
        <li className="border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2">
          <Image
            src="/connect.png"
            alt="Connect"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <h3 className="text-2xl">Seamless Integrations</h3>
          <p className="text-lg">Harness the power of AI to gain deep insights from your financial data and make strategic decisions.</p>
          <button className="flex items-center gap-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded-md text-2xl">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </li>
        <li className="border-2 border-[#E5E5E5] rounded-md p-5 flex flex-col items-start gap-2">
          <Image
            src="/metrics.png"
            alt="Metrics"
            width={1000}
            height={1000}
            
          />
          <h3 className="text-2xl">Advanced Analytics</h3>
          <p className="text-lg">Simplify communication, improve customer experience with innovative solutions.</p>
          <button className="flex items-center gap-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded-md text-2xl">
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