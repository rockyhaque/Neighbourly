import { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Neighbourly?",
      answer:
        "Neighbourly is a platform that connects residents with skilled workers offering home services like plumbing, electrical work, and more.",
    },
    {
      question: "How do I book a service?",
      answer:
        "You can easily book a service by browsing the list of available workers and selecting the one that fits your needs. Contact them directly through the platform.",
    },
    {
      question: "Is Neighbourly available in my area?",
      answer:
        "Neighbourly is expanding! Check our availability in your region by entering your location on our homepage.",
    },
    {
      question: "Are the workers verified?",
      answer:
        "Yes, all workers on Neighbourly are vetted through a thorough verification process to ensure trust and safety.",
    },
    
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-2 ">
      <div className="container mx-auto px-4">
        
        <SectionTitle heading="Frequently Asked Questions" description="Here are some of the common questions we receive. Feel free to contact us if you need more information!" />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring focus:ring-opacity-50"
              >
                <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                  {faq.question}
                  <span className={`transform ${activeIndex === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </h3>
              </button>
              {activeIndex === index && (
                <div className="mt-2 px-4 py-2 bg-blue-50 rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
