'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const faqCategories = [
    {
      name: 'General',
      questions: [
        {
          id: 'g1',
          question: 'What is Agentify.ai?',
          answer: 'Agentify.ai is an AI-powered business automation platform that helps companies streamline their operations, improve efficiency, and reduce costs through intelligent automation solutions.'
        },
        {
          id: 'g2',
          question: 'How can Agentify.ai help my business?',
          answer: 'Our platform can automate repetitive tasks, provide 24/7 customer support, analyze data for insights, and optimize various business processes, allowing your team to focus on strategic activities.'
        },
        {
          id: 'g3',
          question: 'Is Agentify.ai suitable for my industry?',
          answer: 'Agentify.ai is designed to be versatile and can be customized for various industries including technology, retail, finance, healthcare, and more. Our solutions adapt to your specific needs.'
        }
      ]
    },
    {
      name: 'Features',
      questions: [
        {
          id: 'f1',
          question: 'What features are included in the platform?',
          answer: 'Our platform includes AI agents for automation, custom workflow creation, analytics dashboard, integration capabilities, and more. Each feature is designed to enhance your business operations.'
        },
        {
          id: 'f2',
          question: 'Can I customize the AI agents?',
          answer: 'Yes, our AI agents are fully customizable. You can train them on your specific business processes, knowledge base, and preferences to ensure they meet your exact requirements.'
        },
        {
          id: 'f3',
          question: 'What types of integrations are available?',
          answer: 'We offer integrations with popular business tools including CRM systems, communication platforms, analytics tools, and more. We also provide API access for custom integrations.'
        }
      ]
    },
    {
      name: 'Pricing',
      questions: [
        {
          id: 'p1',
          question: 'How much does Agentify.ai cost?',
          answer: 'We offer flexible pricing plans starting from $99/month. Enterprise plans with custom features and dedicated support are also available. Contact our sales team for detailed pricing.'
        },
        {
          id: 'p2',
          question: 'Is there a free trial available?',
          answer: 'Yes, we offer a 14-day free trial with full access to our platform features. No credit card is required to start your trial.'
        },
        {
          id: 'p3',
          question: 'Can I change my plan later?',
          answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. We provide pro-rated refunds for downgrades and cancellations.'
        }
      ]
    },
    {
      name: 'Support',
      questions: [
        {
          id: 's1',
          question: 'What kind of support do you offer?',
          answer: 'We provide 24/7 technical support through chat, email, and phone. Enterprise customers also get access to a dedicated support team and account manager.'
        },
        {
          id: 's2',
          question: 'Is training provided?',
          answer: 'Yes, we offer comprehensive training resources including documentation, video tutorials, webinars, and personalized training sessions for enterprise customers.'
        },
        {
          id: 's3',
          question: 'What is your average response time?',
          answer: 'Our typical response time is under 2 hours for standard support and under 30 minutes for enterprise support inquiries.'
        }
      ]
    }
  ];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <section className="pb-20 pt-48 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {faqCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full font-medium transition-colors
                ${activeCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqCategories
            .find(category => category.name === activeCategory)
            ?.questions.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform
                      ${openQuestions.includes(item.id) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openQuestions.includes(item.id) && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}