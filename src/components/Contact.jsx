import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left contact info */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-secondary">
              I'm currently open to new opportunities and collaborations. Whether you have a project
              in mind, a question, or just want to say hello, feel free to reach out!
            </p>

            <div className="flex items-center pt-4">
              <a
                href="#"
                download
                className="px-6 py-3 bg-[#64FFDA] text-primary hover:bg-opacity-90 rounded-lg whitespace-nowrap flex items-center"
              >
                <i className="ri-download-line ri-lg mr-2"></i>
                Download Resume
              </a>
            </div>

            <div className="space-y-4 pt-4">
              {[
                {
                  icon: "ri-mail-line",
                  label: "Email",
                  value: "aditya.raul@example.com",
                },
                {
                  icon: "ri-map-pin-line",
                  label: "Location",
                  value: "Mumbai, India",
                },
                {
                  icon: "ri-linkedin-line",
                  label: "LinkedIn",
                  value: "linkedin.com/in/adityaraul",
                },
              ].map((info, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="w-10 h-10 flex items-center justify-center mr-4 text-[#64FFDA]">
                    <i className={`${info.icon} ri-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{info.label}</h3>
                    <p className="text-secondary">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {["github", "linkedin", "twitter", "instagram", "dribbble"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center glass-card rounded-full text-[#64FFDA] hover:text-white transition-colors"
                  >
                    <i className={`ri-${platform}-fill ri-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right contact form */}
          <div className="md:w-1/2">
            <form className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#64FFDA] text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#64FFDA] text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#64FFDA] text-sm"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#64FFDA] text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="newsletter" className="custom-checkbox" />
                <label htmlFor="newsletter" className="ml-2 text-secondary text-sm">
                  Subscribe to my newsletter
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#64FFDA] text-primary hover:bg-opacity-90 rounded-lg whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
