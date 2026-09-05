import Box from "./Box";

import vision from "../images/visionpht.avif";
import sun from "../images/sunrise.webp";
import river from "../images/river.webp";
import elep from "../images/elep.webp";
import res from "../images/resjun.webp";

const galleryImages = [
  {
    image: vision,
    name: "Forest conservation",
  },
  {
    image: elep,
    name: "Elephant conservation",
  },
  {
    image: river,
    name: "River and natural habitat",
  },
  {
    image: res,
    name: "Conservation research",
  },
  {
    image: sun,
    name: "Sunrise over nature",
  },
];

// Gallery section
const Gallery = () => {
  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          Gallery
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {galleryImages.map((item) => (
            <Box
              key={item.name}
              img={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;