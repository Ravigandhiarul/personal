// components/contact/fold1.js
export default function ContactFold1() {
  return (
    <div>
      {/* Blue Header Section */}
      <section className="bg-blue-500 text-white py-16 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2">Get in touch</h2>
          <p className="text-lg mb-6">We'd love to talk about how we can help you.</p>
        </div>
      </section>

      {/* White Content Section - Overlapping the blue header */}
      <section className="bg-white -mt-10 relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Map and Contact Info */}
            <div className="flex-1 relative -top-[40px]">
              {/* Map with rounded corners and shadow */}
              <div className="bg-white rounded-sm shadow-lg overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps?q=Mahalakshmi%20Gardens,%20Coimbatore&output=embed" 
                  className="w-full h-100"
                  title="VR Pumps Location"
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Contact Information - Dark text on white background */}
              <div className="text-gray-800">
                {/* Call us and Email us in same row */}
                <div className="flex flex-col sm:flex-row sm:gap-16 mb-4">
                  <div>
                    <span className="font-semibold text-gray-900 inline-block mb-[5px]">Call us:</span><br />
                    <span className="text-gray-500">+91 9715177222</span>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <span className="font-semibold text-gray-900 inline-block mb-[5px]">Email us:</span><br />
                    <span className="text-gray-500">vrpumps@yahoo.in</span>
                  </div>
                </div>
                
                {/* Address in separate section */}
                <div>
                  <span className="font-semibold text-gray-900 inline-block mb-[5px]">Address:</span><br />
                  <span className="text-gray-500">
                    No. 26, Mahalakshmi Gardens,<br />
                    Thottipalayam Road, Chinniyampalayam,<br />
                    Coimbatore - 641 062. Tamilnadu, INDIA.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 relative -top-[140px] contact-form">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-xl font-semibold mb-[40px] text-center text-gray-900">Contact Form</h3>
                {/* <p className="text-center text-gray-600 mb-6 text-sm">Send us a message and we'll respond shortly</p> */}
                
                <form className="space-y-4">
                  {/* Name Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input 
                        type="text" 
                        placeholder="First name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input 
                        type="text" 
                        placeholder="Last name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                      <input 
                        type="email" 
                        placeholder="email@site.com" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-gray-400">(Optional)</span></label>
                      <input 
                        type="tel" 
                        placeholder="+x(xxx)xxx-xx-xx" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
                    <textarea 
                      rows="5" 
                      placeholder="Tell us about your ..." 
                      className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="button" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors duration-200"
                  >
                    Send Inquiry
                  </button>

                  {/* Response Time */}
                  <p className="text-center text-sm text-gray-500 mt-2">
                    We'll get back to you in 1-2 business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}