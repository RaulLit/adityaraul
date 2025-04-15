import React from "react";

const photoData = [
  {
    src: "https://readdy.ai/api/search-image?query=stunning%20landscape%20photography%20of%20mountains&width=400&height=600&seq=9&orientation=portrait",
    alt: "Mountain landscape",
  },
  {
    src: "https://readdy.ai/api/search-image?query=urban%20cityscape%20at%20night&width=400&height=300&seq=10&orientation=landscape",
    alt: "Urban cityscape",
  },
  {
    src: "https://readdy.ai/api/search-image?query=beautiful%20portrait%20photography&width=400&height=500&seq=11&orientation=portrait",
    alt: "Portrait",
  },
  {
    src: "https://readdy.ai/api/search-image?query=beach%20sunset%20with%20silhouettes&width=400&height=300&seq=12&orientation=landscape",
    alt: "Beach sunset",
  },
  {
    src: "https://readdy.ai/api/search-image?query=architectural%20detail%20with%20interesting%20patterns&width=400&height=400&seq=13&orientation=squarish",
    alt: "Architecture",
  },
  {
    src: "https://readdy.ai/api/search-image?query=wildlife%20photography%20of%20exotic%20birds&width=400&height=500&seq=14&orientation=portrait",
    alt: "Wildlife",
  },
  {
    src: "https://readdy.ai/api/search-image?query=street%20photography%20in%20busy%20market&width=400&height=300&seq=15&orientation=landscape",
    alt: "Street photography",
  },
  {
    src: "https://readdy.ai/api/search-image?query=macro%20photography%20of%20flowers&width=400&height=400&seq=16&orientation=squarish",
    alt: "Macro photography",
  },
  {
    src: "https://readdy.ai/api/search-image?query=ancient%20temple%20ruins%20at%20sunrise&width=400&height=500&seq=17&orientation=portrait",
    alt: "Ancient ruins",
  },
];

const Photography = () => {
  return (
    <section id="photography" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          Photography
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
        </h2>

        <div className="mb-8">
          <p className="text-lg text-secondary max-w-3xl">
            Photography is my creative outlet. Through my lens, I capture moments that tell stories and evoke emotions.
            Here's a collection of my favorite shots from my travels and explorations.
          </p>
        </div>

        <div className="flex space-x-4 mb-8 flex-wrap">
          {["All", "Nature", "Urban", "Portrait", "Travel"].map((filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 ${idx === 0 ? "bg-[#64FFDA] text-primary" : "bg-transparent border border-[#64FFDA] text-[#64FFDA]"} hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-button whitespace-nowrap`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {photoData.map((photo, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full rounded object-top" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-button whitespace-nowrap"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photography;
