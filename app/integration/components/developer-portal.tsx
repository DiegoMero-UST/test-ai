'use client';

const documentationSections = [
  {
    title: 'Getting Started',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Quick Start Guide', 'Installation', 'Authentication', 'First API Call']
  },
  {
    title: 'Core Concepts',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: ['Architecture Overview', 'Data Models', 'Security', 'Best Practices']
  },
  {
    title: 'Advanced Topics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.424 11.577a8.7 8.7 0 00.276-2.077 8.5 8.5 0 00-8.5-8.5 8.5 8.5 0 00-8.5 8.5 8.5 8.5 0 008.5 8.5 8.5 8.5 0 002.077-.276M15 9l-3 3m0 0l-3-3m3 3V3" />
      </svg>
    ),
    items: ['Custom Integrations', 'Webhooks', 'Rate Limiting', 'Error Handling']
  },
  {
    title: 'API Reference',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ['Endpoints', 'Parameters', 'Response Formats', 'Status Codes']
  }
];

export default function DeveloperPortal() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center p-5 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text lg:text-6xl">
          Developer Portal
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
          Comprehensive documentation and resources for developers to build powerful integrations with Agentify.ai
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentationSections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Need Technical Support?
              </h3>
              <p className="text-gray-600">
                Our developer support team is here to help you with any technical questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/docs"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse Docs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-200"
              >
                Contact Support
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
