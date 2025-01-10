'use client';

import { useState } from 'react';

export default function PricingFAQ() {
  const faqs = [
    {
      question: "How does the billing cycle work?",
      answer: "Our billing cycle is monthly or annually, with significant savings on annual plans. You can upgrade, downgrade, or cancel your subscription at any time. Annual subscriptions are billed in full at the start of each billing cycle."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can switch between plans at any time. When upgrading, you'll get immediate access to new features and will be billed the prorated difference. When downgrading, changes will take effect at the start of your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment partners."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no hidden setup fees. The price you see is the price you pay. For Enterprise customers, we offer custom onboarding and setup services which may have associated costs, but these will be clearly outlined in your contract."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial on our Pro plan, allowing you to test all features before committing. No credit card is required to start your trial. You can also explore our Free tier indefinitely to get familiar with our basic features."
    },
    {
      question: "What kind of support is included?",
      answer: "Support varies by plan. Free users get community support and documentation access. Pro users receive email support with 24-hour response time. Enterprise customers get priority 24/7 support, dedicated account managers, and custom training sessions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <ul className="space-y-4 md:px-20">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b border-gray-200 last:border-0">
              <button
                className="w-full py-6 flex justify-between items-start text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold pr-8">{faq.question}</span>
                <span className="text-blue-600 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}