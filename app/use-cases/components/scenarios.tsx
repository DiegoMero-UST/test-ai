export default function Scenarios() {
  const scenarios = [
    {
      title: "Task Automation",
      problem: "Repetitive tasks consuming valuable employee time",
      solution: "Our AI agents handle routine operations automatically",
      benefits: [
        "Save 20+ hours per week per employee",
        "Reduce human error by 95%",
        "24/7 operation capability"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Customer Engagement",
      problem: "Limited support hours and slow response times",
      solution: "AI-powered 24/7 customer service with instant responses",
      benefits: [
        "Instant response to customer queries",
        "Multilingual support",
        "Consistent service quality"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Data Processing",
      problem: "Manual data entry and analysis causing bottlenecks",
      solution: "Automated data processing with AI-powered insights",
      benefits: [
        "90% faster data processing",
        "Real-time analytics",
        "Automated report generation"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Real-World Scenarios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-gray-100"
            >
              <div className="mb-6">
                {scenario.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {scenario.title}
              </h3>

              <div className="space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-lg font-semibold text-red-500 mb-2">The Challenge:</h4>
                  <p className="text-gray-600">{scenario.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-green-500 mb-2">Our Solution:</h4>
                  <p className="text-gray-600">{scenario.solution}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {scenario.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Ready to transform your business operations with AI?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}