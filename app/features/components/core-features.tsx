import Image from "next/image";

export default function CoreFeatures() {
  return (
    <section className="px-5 py-20 xl:flex xl:flex-col xl:items-center" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-4xl font-bold text-center mb-16 xl:text-6xl">Core Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 xl:flex xl:p-20">
        {/* AI Agent Customization */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="AI Agent Customization" width={1000} height={1000} className="object-contain" />
          <h3 className="text-3xl font-bold">AI Agent Customization</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4 text-xl">
            <li>Tailor your AI assistant to your specific needs and workflows.</li>
            <li>Fine-tune AI behavior and capabilities for optimal performance.</li>
            <li>Create custom AI agents with unique skills and personalities.</li>
          </ul>
        </li>

        {/* Task Automation */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Task Automation" width={1000} height={1000} className="object-contain" />
          <h3 className="text-3xl font-bold">Task Automation</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4 text-xl">
            <li>Automate repetitive and time-consuming tasks with AI.</li>
            <li>Free up your team to focus on high-value work.</li>
            <li>Increase efficiency and productivity across your organization.</li>
          </ul>
        </li>

        {/* Real-Time Insights */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Real-Time Insights" width={1000} height={1000} className="object-contain" />
          <h3 className="text-3xl font-bold">Real-Time Insights and Analytics</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4 text-xl">
            <li>Gain valuable insights into AI performance and user behavior.</li>
            <li>Track key metrics and identify areas for improvement.</li>
            <li>Make data-driven decisions to optimize your AI workflows.</li>
          </ul>
        </li>

        {/* Integration */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Integration with Popular Tools" width={1000} height={1000} className="object-contain" />
          <h3 className="text-3xl font-bold">Integration with Popular Tools</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4 text-xl">
            <li>Seamlessly integrate AI into your existing tech stack.</li>
            <li>Connect with popular business tools for a unified experience.</li>
            <li>Improve data flow and streamline workflows across your organization.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}