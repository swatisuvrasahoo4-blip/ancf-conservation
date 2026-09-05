import vision from "../images/visionpht.avif";

const visionItems = [
  {
    title: "Our Vision",
    description:
      "A future where forests are connected, wildlife thrives, and people live in harmony with nature.",
  },
  {
    title: "Our Goals",
    description:
      "Protect and restore critical habitats, reduce human-wildlife conflict, and ensure the survival of endangered species.",
  },
  {
    title: "Our Future",
    description:
      "Building resilient ecosystems and sustainable conservation programs for future generations.",
  },
];

// Vision section
const Vision = () => {
  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* Vision content */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600 sm:text-sm">
            Our Vision
          </p>

          <h2 className="mt-4 max-w-xl font-serif text-3xl font-bold leading-tight text-[#66390A] sm:text-4xl lg:text-5xl">
            Creating connected forests where elephants and communities
            thrive together.
          </h2>

          {/* Vision details */}
          <div className="mt-8">
            {visionItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border-b border-[#66390A]/30 py-5 first:pt-0 last:border-b-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-amber-100">
                  <span
                    role="img"
                    aria-label="Goal"
                    className="text-lg"
                  >
                    🎯
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[#66390A] sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-lg text-sm leading-6 text-[#66390A]/80 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision image */}
        <div className="w-full">
          <img
            src={vision}
            alt="Forest and wildlife conservation"
            className="mx-auto w-full max-w-xl rounded-2xl object-cover shadow-md lg:max-h-[520px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;