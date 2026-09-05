const journeyItems = [
  {
    year: "1997",
    title: "Foundation",
    description:
      "ANCF was established to protect Asian elephant habitats and conserve biodiversity.",
  },
  {
    year: "2005",
    title: "First Corridor",
    description:
      "Launched our first forest corridor restoration project connecting fragmented habitats.",
  },
  {
    year: "2015",
    title: "Community Programs",
    description:
      "Expanded community conservation, education, and conflict mitigation initiatives.",
  },
  {
    year: "2026",
    title: "Stronger Impact",
    description:
      "Continuing to scale conservation efforts across South and Southeast Asia.",
  },
];

// Our journey section
const Journey = () => {
  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
          Our Journey
        </p>

        {/* Desktop timeline */}
        <div className="mt-10 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-2.5 h-0.5 bg-[#66390A]" />

            <div className="relative grid grid-cols-4 gap-8">
              {journeyItems.map((item) => (
                <div
                  key={item.year}
                  className="flex flex-col items-center text-center"
                >
                  <div className="z-10 h-5 w-5 rounded-full bg-[#66390A]" />

                  <div className="mt-5">
                    <p className="font-bold text-[#66390A]">
                      {item.year}
                    </p>

                    <h3 className="mt-1 font-serif text-base font-bold text-[#66390A]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-52 text-sm leading-6 text-[#66390A]/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="mt-8 space-y-0 md:hidden">
          {journeyItems.map((item, index) => (
            <div
              key={item.year}
              className="relative flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 shrink-0 rounded-full bg-[#66390A]" />

                {index !== journeyItems.length - 1 && (
                  <div className="h-full min-h-28 w-0.5 bg-[#66390A]/50" />
                )}
              </div>

              <div className="pb-8">
                <p className="font-bold text-[#66390A]">
                  {item.year}
                </p>

                <h3 className="mt-1 font-serif text-lg font-bold text-[#66390A]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#66390A]/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;