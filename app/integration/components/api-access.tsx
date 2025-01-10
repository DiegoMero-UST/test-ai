'use client';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Access all Agentify.ai features through our modern REST API with comprehensive endpoints.',
    code: `curl -X POST https://api.agentify.ai/v1/agents \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{"name": "Custom Agent", "type": "assistant"}'`
  },
  {
    title: 'WebSocket Support',
    description: 'Real-time communication for live updates and streaming responses.',
    code: `const socket = new WebSocket('wss://api.agentify.ai/v1/ws');
socket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log('Received:', response);
};`
  },
  {
    title: 'SDK Libraries',
    description: 'Official SDKs available for popular programming languages.',
    code: `// Node.js
import { AgentifyAI } from 'agentify-ai';
const client = new AgentifyAI('YOUR_API_KEY');

// Python
from agentify_ai import AgentifyAI
client = AgentifyAI('YOUR_API_KEY')`
  }
];

export default function ApiAccess() {
  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text lg:text-6xl">
          API Access
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
          Powerful, flexible, and secure API access for developers to integrate Agentify.ai into their applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {apiFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
              </div>
              <div className="bg-gray-900 p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap break-words">
                  <code>{feature.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Getting Started
            </h3>
            <div className="prose max-w-none text-gray-600">
              <ol className="list-decimal list-inside space-y-4">
                <li>Sign up for a developer account</li>
                <li>Generate your API key from the dashboard</li>
                <li>Review our comprehensive API documentation</li>
                <li>Test your integration in our sandbox environment</li>
                <li>Monitor usage and analytics in real-time</li>
              </ol>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/docs"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Documentation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
