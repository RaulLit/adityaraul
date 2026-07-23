"use client";

import { useState } from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiLinkedinLine,
  RiDownloadLine,
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiHeartLine,
} from "@remixicon/react";
import DonateModal from "./DonateModal";

import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Contact() {
  const { isAnimeMode } = useAnimeTheme();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const showSuccess = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 10000);
  };
  const showError = () => {
    setError(true);
    setTimeout(() => setError(false), 10000);
  };

  const information = [
    {
      icon: <RiMailLine size={22} />,
      label: "Email",
      value: "adityaraulco@gmail.com",
    },
    {
      icon: <RiMapPinLine size={22} />,
      label: "Location",
      value: "Navi Mumbai, Maharashtra, India",
    },
    {
      icon: <RiLinkedinLine size={22} />,
      label: "LinkedIn",
      value: "linkedin.com/in/adityaraul",
    },
  ];

  const platforms = [
    {
      icon: <RiGithubFill size={22} />,
      label: "github",
      href: "https://github.com/RaulLit",
    },
    {
      icon: <RiLinkedinFill size={22} />,
      label: "linkedin",
      href: "https://www.linkedin.com/in/adityakraul/",
    },
    {
      icon: <RiTwitterXFill size={22} />,
      label: "twitter",
      href: "https://x.com/adityakraul",
    },
    {
      icon: <RiInstagramFill size={22} />,
      label: "instagram",
      href: "https://www.instagram.com/notadityaraul/",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_API_KEY);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      // Check if the response was successful before parsing JSON
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();

      if (res.success) {
        showSuccess();
      } else {
        // Handle case where API returns success: false
        console.log("API returned unsuccessful response", res);
        showError();
      }
    } catch (err) {
      console.log("Error in form submission:", err);
      showError();
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          {isAnimeMode ? "[ TRANSMIT SYSTEM QUEST / CONTACT MONARCH ]" : "Get In Touch"}
          <span className={`absolute bottom-0 left-0 w-1/2 h-1 ${isAnimeMode ? "bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" : "bg-[#64FFDA]"}`}></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left contact info */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-secondary">
              {isAnimeMode
                ? "I am available for high-tier party raids, enterprise SSO architecture, and full-stack project summons. Transmit your quest message below!"
                : "I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out!"}
            </p>

            <div className="flex items-center flex-wrap gap-4 pt-4">
              <a
                href="/Aditya_Raul_Resume.pdf"
                download
                className={`px-6 py-3 ${
                  isAnimeMode
                    ? "bg-[#00F0FF] text-[#050B14] font-bold font-mono hover:bg-[#00F0FF]/80 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                    : "bg-[#64FFDA] text-primary hover:bg-[#64FFDA]/80"
                } rounded-lg whitespace-nowrap flex items-center cursor-pointer`}
              >
                <RiDownloadLine size={22} className="mr-2" />
                {isAnimeMode ? "[ HUNTER RESUME ]" : "Download Resume"}
              </a>
              <button
                type="button"
                onClick={() => setDonateOpen(true)}
                className={`px-6 py-3 border-2 ${
                  isAnimeMode
                    ? "border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/20 font-mono shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                } rounded-lg whitespace-nowrap flex items-center cursor-pointer`}
              >
                <RiHeartLine size={22} className="mr-2" />
                {isAnimeMode ? "[ SUPPORT GUILD ]" : "Support Me"}
              </button>
            </div>

            <div className="space-y-4 pt-4">
              {information.map((info, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="w-10 h-10 flex items-center justify-center mr-4 text-[#64FFDA]">
                    {info.icon}
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
                {platforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Aditya Raul's ${platform.label} profile`}
                    className="w-12 h-12 flex items-center justify-center glass-card rounded-full text-[#64FFDA] hover:text-white transition-colors"
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right contact form */}
          <div className="md:w-1/2">
            <form className="glass-card p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#64FFDA] text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 ${
                  isAnimeMode
                    ? "bg-[#00F0FF] text-[#050B14] font-bold font-mono hover:bg-[#00F0FF]/80 shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                    : "bg-[#64FFDA] text-primary hover:bg-[#64FFDA]/80"
                } rounded-lg whitespace-nowrap cursor-pointer`}
              >
                {isAnimeMode ? "[ TRANSMIT QUEST MESSAGE ]" : "Send Message"}
              </button>
            </form>
            <div
              className={`p-4 m-1 glass rounded-lg text-green-400 transition-opacity duration-300 ${
                success ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Email sent successfully! Thank you for your time.
            </div>
            <div
              className={`p-4 m-1 glass rounded-lg text-red-400 transition-opacity duration-300 ${
                error ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Error in sending email. Don't send spam emails.
            </div>
          </div>
        </div>
      </div>
      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </section>
  );
}
