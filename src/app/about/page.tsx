import React, { FC } from 'react';

// Define structure for value items to keep the code DRY and scalable
interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: '✦',
    title: 'Curated Trends',
    description: "We don't just list products; we select the latest and most relevant trends so you don't have to scroll endlessly."
  },
  {
    icon: '✓',
    title: 'Quality Assurance',
    description: 'Every vendor and product on our platform undergoes a strict vetting process to ensure top-tier standards.'
  },
  {
    icon: '⚙',
    title: 'Seamless Tech',
    description: 'Built on a modern full-stack architecture to ensure fast load times, easy navigation, and secure checkouts.'
  }
];

const AboutPage: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            About <span className="text-orange-500">Trendy Haat</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Bridging tradition and modern trends to bring you a curated e-commerce experience like no other.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The word <strong className="text-neutral-950">"Haat"</strong> represents a traditional, vibrant marketplace—a place of community, discovery, and trust. **Trendy Haat** was born out of a vision to take this authentic marketplace experience and elevate it for the digital age. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            We blend the fast-paced world of modern trends with the reliability of a trusted local hub. Whether you are looking for everyday essentials or unique statement pieces, we curate products that fit seamlessly into your lifestyle.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-400 to-amber-600 h-72 md:h-96 rounded-2xl shadow-lg flex items-center justify-center text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-orange-50 font-light max-w-sm">
              To provide a seamless, secure, and highly engaging shopping experience by delivering quality products directly to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-neutral-900">Ready to explore the Haat?</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Discover handpicked collections tailored just for you. Happy shopping!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg shadow-sm transition-colors">
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default AboutPage;