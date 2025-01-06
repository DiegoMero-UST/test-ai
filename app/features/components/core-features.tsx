import Image from "next/image";

export default function CoreFeatures() {
  return (
    <section className="px-5 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* AI Agent Customization */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="AI Agent Customization" width={1000} height={1000} className="object-contain" />
          <h3 className="text-2xl font-bold">AI Agent Customization</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4">
            <li>Tailor your AI assistant to your specific needs and workflows.</li>
            <li>Fine-tune AI behavior and capabilities for optimal performance.</li>
            <li>Create custom AI agents with unique skills and personalities.</li>
          </ul>
        </li>

        {/* Task Automation */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Task Automation" width={1000} height={1000} className="object-contain" />
          <h3 className="text-2xl font-bold">Task Automation</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4">
            <li>Automate repetitive and time-consuming tasks with AI.</li>
            <li>Free up your team to focus on high-value work.</li>
            <li>Increase efficiency and productivity across your organization.</li>
          </ul>
        </li>

        {/* Real-Time Insights */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Real-Time Insights" width={1000} height={1000} className="object-contain" />
          <h3 className="text-2xl font-bold">Real-Time Insights and Analytics</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4">
            <li>Gain valuable insights into AI performance and user behavior.</li>
            <li>Track key metrics and identify areas for improvement.</li>
            <li>Make data-driven decisions to optimize your AI workflows.</li>
          </ul>
        </li>

        {/* Integration */}
        <li className="flex flex-col gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
          <Image src="/botcustom2.png" alt="Integration with Popular Tools" width={1000} height={1000} className="object-contain" />
          <h3 className="text-2xl font-bold">Integration with Popular Tools</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-4">
            <li>Seamlessly integrate AI into your existing tech stack.</li>
            <li>Connect with popular business tools for a unified experience.</li>
            <li>Improve data flow and streamline workflows across your organization.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}