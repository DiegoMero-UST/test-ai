'use client';

const platforms = [
  {
    name: 'Slack',
    icon: '/partners.png',
    description: 'Seamlessly integrate with your team communication'
  },
  {
    name: 'Salesforce',
    icon: '/partners.png',
    description: 'Connect with your CRM system'
  },
  {
    name: 'Microsoft Teams',
    icon: '/partners.png',
    description: 'Collaborate within your Microsoft ecosystem'
  },
  {
    name: 'Zoom',
    icon: '/partners.png',
    description: 'Enhance your video conferencing experience'
  },
  {
    name: 'Google Workspace',
    icon: '/partners.png',
    description: 'Integrate with Google tools and services'
  },
  {
    name: 'Jira',
    icon: '/partners.png',
    description: 'Streamline your project management'
  },
  {
    name: 'GitHub',
    icon: '/partners.png',
    description: 'Automate your development workflow'
  },
  {
    name: 'Notion',
    icon: '/partners.png',
    description: 'Connect your knowledge base'
  }
];

export default function SupportedPlatforms() {
  return (
    <section className="pt-56 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center p-5 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text lg:text-6xl">
          Supported Platforms
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
          Agentify.ai integrates seamlessly with your favorite tools and platforms, making automation accessible across your entire workflow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {platform.name}
                </h3>
              </div>
              <p className="text-gray-600">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Don&apos;t see your platform? We&apos;re constantly adding new integrations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Request Integration
          </button>
        </div>
      </div>
    </section>
  );
}
