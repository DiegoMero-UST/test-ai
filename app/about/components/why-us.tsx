export default function WhyUs() {
  const advantages = [
    {
      title: "Industry Expertise",
      description: "With over 20 years of combined experience in AI and automation, our team brings deep industry knowledge to every solution.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Technology",
      description: "We continuously invest in R&D to ensure our AI solutions remain at the forefront of technological advancement.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Customer Success Focus",
      description: "Our dedicated support team ensures you get the most out of our solutions with personalized assistance and training.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  const values = [
    "Innovation First",
    "Customer Success",
    "Continuous Improvement",
    "Ethical AI Development"
  ];

  return (
    <section className="py-20 px-5"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center pb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text" data-aos="fade-up" data-aos-delay="100">
          Why Choose Us
        </h2>

        {/* Core Values */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
          {values.map((value, index) => (
            <span 
              key={index}
              className="px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-medium"
            >
              {value}
            </span>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200"  >
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join the hundreds of businesses that have already transformed their operations 
            with our AI solutions. Experience the difference of working with a leader in 
            business automation.
          </p>
        </div>
      </div>
    </section>
  );
}