"use client";

import Image from "next/image";
import { useAnimeTheme } from "../providers/AnimeThemeProvider";

export default function Photography() {
  const { isAnimeMode } = useAnimeTheme();

  const photoData = [
    {
      src: "/photography/waterfall.jpg",
      alt: "Scenic waterfall flowing down a lush green mountain slope",
    },
    {
      src: "/photography/sunset_on_hills.jpeg",
      alt: "Golden hour sunset glowing over rolling hills and mist",
    },
    {
      src: "/photography/monsoon_blue_flower.jpg",
      alt: "Close-up photography of a vibrant blue monsoon flower with raindrops",
    },
    {
      src: "/photography/window_droplets.jpg",
      alt: "Raindrops glistening on a glass window pane during a monsoon storm",
    },
    {
      src: "/photography/hills_blue_sky.jpeg",
      alt: "Panoramic view of green mountain hills under a clear blue sky",
    },
    {
      src: "/photography/morning_lake_reflection.jpeg",
      alt: "Peaceful morning lake reflecting surrounding hills and sky",
    },
    {
      src: "/photography/leaflet_and_greenary.jpg",
      alt: "Fresh green leaf macro photograph capturing nature detail",
    },
    {
      src: "/photography/purple_sunset.jpg",
      alt: "Stunning purple and magenta sky during evening sunset",
    },
    {
      src: "/photography/small_flower_closeup.jpeg",
      alt: "Detailed macro photograph of a delicate wild blossom",
    },
  ];
  return (
    <section id="photography" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
          {isAnimeMode ? "[ MONARCH'S DOMAIN & SHADOW RECORDS ]" : "Photography"}
          <span className={`absolute bottom-0 left-0 w-1/2 h-1 ${isAnimeMode ? "bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" : "bg-[#64FFDA]"}`}></span>
        </h2>

        <div className="mb-8">
          <p className="text-lg text-secondary max-w-3xl">
            {isAnimeMode
              ? "Photography is my creative perception. Through the lens of the Shadow Monarch, I freeze extraordinary moments across nature and human realms."
              : "Photography is my creative outlet. Through my lens, I capture moments that tell stories and evoke emotions. Here's a collection of my favorite shots from my travels and explorations."}
          </p>
        </div>

        <div className="masonry-grid">
          {photoData.map((photo, idx) => (
            <div key={idx} className={`glass-card overflow-hidden rounded-lg ${isAnimeMode ? "border-[#00F0FF]/40 hover:border-[#00F0FF]" : ""}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto rounded-lg object-top m-0"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://photos.adityaraul.in/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 bg-transparent border-2 ${
              isAnimeMode
                ? "border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/20 font-mono shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                : "border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
            } rounded-lg whitespace-nowrap inline-block`}
          >
            {isAnimeMode ? "[ EXPAND FULL DOMAIN GALLERY ]" : "View Full Gallery"}
          </a>
        </div>
      </div>
    </section>
  );
}
