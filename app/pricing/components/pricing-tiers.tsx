export default function PricingTiers() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Basic AI agent customization',
        'Limited automation tasks',
        'Standard analytics',
        'Community support',
        'Basic integrations'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      features: [
        'Advanced AI customization',
        'Unlimited automation tasks',
        'Advanced analytics & reporting',
        'Priority support',
        'Full integration capabilities',
        'Team collaboration tools',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Custom AI development',
        'Dedicated success manager',
        'SLA guarantees',
        'Advanced security features',
        'Custom integrations',
        'On-premise deployment option',
        'Training & onboarding',
        '24/7 premium support'
      ]
    }
  ];

  return (
    <section className="pt-52 pb-20 px-5 bg-gray-50 xl:pt-64">
      <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Looking for your best fit?</h2>
      <h3 className="text-3xl font-bold text-center mb-16 lg:text-4xl" data-aos="fade-up" data-aos-delay="200">We&apos;ve got you covered!</h3>
      <ul className="grid grid-cols-1 md:flex md:flex-col gap-8 max-w-7xl mx-auto md:px-32 lg:flex-row lg:px-5">
        {tiers.map((tier, index) => (
          <li 
            key={index}
            className="flex flex-col p-8 bg-white rounded-lg shadow-lg border-2 border-gray-100 hover:border-blue-500 transition-colors"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold mb-4">{tier.name}</h3>
            <p className="text-4xl font-bold mb-8 text-blue-600">{tier.price}</p>
            <ul className="space-y-4 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start text-xl gap-2">
                  <svg 
                    className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-xl italic border-t border-gray-200 pt-8">
          <span className="text-blue-600">Note:</span> Each plan builds upon the features of the previous tier, 
          providing enhanced capabilities and additional functionalities to support your growing business needs.
        </p>
      </div>
    </section>
  );
}