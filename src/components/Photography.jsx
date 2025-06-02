import React from "react";

const photoData = [
  {
    src: "/photography/waterfall.jpg",
    alt: "Mountain landscape",
  },
  {
    src: "/photography/sunset_on_hills.jpeg",
    alt: "Street photography",
  },
  {
    src: "/photography/monsoon_blue_flower.jpg",
    alt: "Portrait",
  },
  {
    src: "/photography/window_droplets.jpg",
    alt: "Ancient ruins",
  },
  {
    src: "/photography/hills_blue_sky.jpeg",
    alt: "Macro photography",
  },
  {
    src: "/photography/morning_lake_reflection.jpeg",
    alt: "Beach sunset",
  },
  {
    src: "/photography/leaflet_and_greenary.jpg",
    alt: "Urban cityscape",
  },
  {
    src: "/photography/purple_sunset.jpg",
    alt: "Architecture",
  },
  {
    src: "/photography/small_flower_closeup.jpeg",
    alt: "Wildlife",
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
            Photography is my creative outlet. Through my lens, I capture moments that tell stories
            and evoke emotions. Here's a collection of my favorite shots from my travels and
            explorations.
          </p>
        </div>

        {/* <div className="flex space-x-4 mb-8 flex-wrap">
          {["All", "Nature", "Urban", "Portrait", "Travel"].map((filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 ${idx === 0 ? "bg-[#64FFDA] text-primary" : "bg-transparent border border-[#64FFDA] text-[#64FFDA]"} hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-lg whitespace-nowrap`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        <div className="masonry-grid">
          {photoData.map((photo, idx) => (
            <div key={idx} className="glass-card overflow-hidden rounded-lg">
              <img src={photo.src} alt={photo.alt} className="w-full rounded-lg object-top m-0" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://photos.adityaraul.in/"
            className="px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:bg-opacity-10 rounded-lg whitespace-nowrap"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photography;
