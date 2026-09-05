const impactStats = [
  {
    number: "120+",
    label: "Elephants Protected",
  },
  {
    number: "25+",
    label: "Forest Corridors",
  },
  {
    number: "40+",
    label: "Researchers & Volunteers",
  },
  {
    number: "150+",
    label: "Communities Involved",
  },
];

// Impact section
const Impact = () => {
  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          Our Impact
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((item, index) => (
            <div
              key={item.label}
              className={`text-center ${
                index !== impactStats.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <h2 className="font-serif text-4xl font-bold text-amber-50 sm:text-5xl">
                {item.number}
              </h2>

              <p className="mx-auto mt-3 max-w-36 font-serif text-sm leading-6 text-amber-50/85 sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;