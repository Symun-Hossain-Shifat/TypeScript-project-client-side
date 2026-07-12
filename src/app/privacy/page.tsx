import React, { FC } from 'react';

interface PrivacySection {
  title: string;
  content: string;
  listItems?: string[];
}

const sections: PrivacySection[] = [
  {
    title: '1. Information We Collect',
    content: 'We collect personal information when you create an account, place an order, or browse our marketplace. This helps us provide a smooth, customized shopping experience.',
    listItems: [
      'Account details: Your name, email address, phone number, and password.',
      'Transaction information: Delivery addresses, billing information, and order histories.',
      'Technical data: IP address, device type, browser metadata, and cookie strings.'
    ]
  },
  {
    title: '2. How We Use Your Data',
    content: 'Trendy Haat processes your personal data transparently and for specific, verified operations, including:',
    listItems: [
      'Processing, packaging, and delivering your ordered goods.',
      'Securing payment operations and preventing fraudulent transactions.',
      'Sending order updates, shipping statuses, and essential customer service notices.',
      'Improving our application architecture and offering tailored shopping recommendations.'
    ]
  },
  {
    title: '3. Data Protection and Security',
    content: 'We use industry-standard electronic security layouts and encryption practices to safe-keep your profile metadata. However, no data transmitted over the internet can be completely secure. While we strive to defend your personal profiles, you acknowledge that security risks are inherent to any online platform.'
  },
  {
    title: '4. Cookies and Web Analytics',
    content: 'Our Next.js frontend uses cookies and small session variables to keep track of your active shopping cart, remember your authentication tokens, and inspect web engagement trends. You can choose to disable cookies via your browser settings, though doing so might cause parts of the marketplace to stop working seamlessly.'
  },
  {
    title: '5. Third-Party Sharing Rules',
    content: 'We do not sell, barter, or trade your personal information with external marketers. We only pass along critical data segments to trusted third parties to run the marketplace:',
    listItems: [
      'Logistics and delivery couriers to handle drop-shipping and handoffs.',
      'Secure payment processors to handle credit card or digital wallet verification.',
      'Analytical database engines to track system uptimes and load performance.'
    ]
  },
  {
    title: '6. Your Rights',
    content: 'You retain full control over your data. Depending on your regulatory location, you have the right to request a copy of your stored profiles, ask us to correct clerical errors, or delete your Trendy Haat profile entirely by reaching out directly to our administration desk.'
  }
];

const PrivacyPage: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Document Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Effective Date: January 1, {currentYear} | Last Updated: July 2026
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Intro Alert Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl mb-10 shadow-sm">
          <p className="text-xs text-orange-800 leading-relaxed">
            <strong>Welcome to Trendy Haat.</strong> Your trust is the core foundation of our digital marketplace. This policy breaks down exactly how we look after your data, protect your profile metrics, and preserve your digital privacy when you browse our modern web application.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10 space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
              <h2 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {section.content}
              </p>
              
              {section.listItems && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.listItems.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-600 text-xs leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Footer Note */}
        <div className="text-center mt-12 bg-neutral-950 text-white rounded-2xl p-8 shadow-md">
          <h3 className="text-lg font-bold mb-2">Have questions about your data?</h3>
          <p className="text-gray-400 text-xs max-w-md mx-auto mb-4">
            If you need clarity on our data collection models, or wish to invoke your data removal rights, send our platform compliance officers an email.
          </p>
          <a 
            href="mailto:privacy@trendyhaat.com" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Contact Privacy Desk
          </a>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;