
import React from 'react';

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-healthcare-900 to-healthcare-800 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-bg absolute inset-0"></div>
      </div>
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl text-gray-200 font-medium mb-0 leading-relaxed">
              Book an appointment today or become a member to access premium healthcare services.
            </p>
          </div>

          <div className="w-full md:w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-healthcare-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-healthcare-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-healthcare-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-healthcare-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Type your question here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-healthcare-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-healthcare-700 active:transform active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
