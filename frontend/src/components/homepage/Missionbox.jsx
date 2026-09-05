// Mission section
const Missionbox = () => {
  const missionDetails = [
    {
      label: "FOUNDED",
      value: "1997",
    },
    {
      label: "FOCUS SPECIES",
      value: "Asian Elephant — Elephas maximus",
    },
    {
      label: "RANGE",
      value: "South & Southeast Asia",
    },
    {
      label: "HEADQUARTERS",
      value: "Bangalore, India",
    },
  ];

  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* Mission content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
            Our Mission
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#1f3c28] sm:text-4xl lg:text-5xl">
            A keystone species needs a connected forest, not a fenced one.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
            ANCF is a non-profit charitable trust working across
            the biologically rich forests of South and Southeast
            Asia. We focus on the Asian elephant — research,
            habitat connectivity, and conflict mitigation that
            protects entire landscapes, not just a single species.
          </p>
        </div>

        {/* Mission information */}
        <div className="flex flex-col justify-center">
          {missionDetails.map((item) => (
            <div
              key={item.label}
              className="border-b border-gray-400 py-4 first:pt-0"
            >
              <h3 className="text-xs font-bold tracking-wide text-gray-600 sm:text-sm">
                {item.label}
              </h3>

              <p className="mt-1 text-sm text-gray-900 sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missionbox;