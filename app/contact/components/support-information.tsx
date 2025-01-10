export default function SupportInformation() {
  const supportChannels = [
    {
      title: "Email Support",
      info: "support@agentify.ai",
      description: "24-hour response time guaranteed",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Phone Support",
      info: "+1 (888) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Live Chat",
      info: "Available Now",
      description: "Instant support from our AI team",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          We&apos;re Here to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center group"
            >
              <div className="mb-6 flex justify-center">
                {channel.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">
                {channel.title}
              </h3>

              <p className="text-2xl text-blue-600 font-semibold mb-2">
                {channel.info}
              </p>

              <p className="text-gray-600">
                {channel.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                Connect Now →
              </button>
            </div>
          ))}
        </div>

        {/* Additional Support Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Enterprise Support
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Need dedicated support for your enterprise? Our premium support package includes 
            priority response times, dedicated account manager, and custom SLA agreements.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Enterprise Sales
          </button>
        </div>

        {/* FAQ Quick Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Looking for quick answers? Check our{' '}
            <a href="/faq" className="text-blue-600 hover:text-blue-800 font-semibold">
              Frequently Asked Questions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}