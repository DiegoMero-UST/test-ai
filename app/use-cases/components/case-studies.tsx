export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Technology",
      challenge: "Manual customer support causing 24+ hour response times",
      solution: "Implemented AI customer service automation",
      results: [
        "95% reduction in response time",
        "73% increase in customer satisfaction",
        "$2M annual cost savings",
        "24/7 support coverage"
      ],
      metric: "95%",
      metricLabel: "Faster Response Time"
    },
    {
      company: "Global Retail Inc",
      industry: "Retail",
      challenge: "Inefficient inventory management leading to stockouts",
      solution: "Deployed AI-powered inventory prediction system",
      results: [
        "82% reduction in stockouts",
        "30% decrease in storage costs",
        "45% improvement in order accuracy",
        "$5M increase in annual revenue"
      ],
      metric: "82%",
      metricLabel: "Fewer Stockouts"
    },
    {
      company: "FinServe Bank",
      industry: "Financial Services",
      challenge: "Manual document processing creating transaction delays",
      solution: "Implemented AI document processing automation",
      results: [
        "90% faster document processing",
        "99.9% accuracy rate",
        "65% reduction in operational costs",
        "4-hour reduction in processing time"
      ],
      metric: "90%",
      metricLabel: "Processing Speed"
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Metric Highlight */}
              <div className="bg-blue-600 p-8 text-center text-white">
                <span className="block text-5xl font-bold mb-2">{study.metric}</span>
                <span className="text-lg">{study.metricLabel}</span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{study.company}</h3>
                    <span className="text-gray-600">{study.industry}</span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Join these successful businesses and transform your operations with Agentify.ai
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              View More Cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}