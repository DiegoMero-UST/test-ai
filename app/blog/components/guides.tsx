export default function Guides() {
  const guides = [
    {
      level: "Beginner",
      title: "Getting Started with Agentify.ai",
      description: "Learn the basics of setting up and configuring your first AI agent.",
      steps: [
        "Creating your account",
        "Setting up your first agent",
        "Basic configuration options",
        "Running your first automation"
      ],
      duration: "15 min",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      level: "Intermediate",
      title: "Advanced Agent Configuration",
      description: "Dive deep into customizing your AI agents for specific business needs.",
      steps: [
        "Custom workflow creation",
        "Integration with existing systems",
        "Advanced automation rules",
        "Performance optimization"
      ],
      duration: "25 min",
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      level: "Expert",
      title: "Building Custom Solutions",
      description: "Create sophisticated automation solutions using our advanced features.",
      steps: [
        "API integration",
        "Custom script development",
        "Complex workflow automation",
        "Enterprise-level deployment"
      ],
      duration: "40 min",
      icon: (
        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-5 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text py-5 lg:text-6xl">
            How-To Guides
          </h2>
          <p className="text-xl text-gray-600">
            Master Agentify.ai with our comprehensive tutorials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${guide.level === 'Beginner' ? 'bg-green-100 text-green-600' : 
                      guide.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'}`}
                  >
                    {guide.level}
                  </span>
                  {guide.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {guide.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {guide.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What you&apos;ll learn:</h4>
                  <ul className="space-y-2">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    Duration: {guide.duration}
                  </span>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Start Guide →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need More Help?
          </h3>
          <p className="text-gray-600 mb-8">
            Check out our additional resources or contact our support team
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Documentation
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}