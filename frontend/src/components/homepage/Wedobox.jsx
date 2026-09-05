const services = [
  {
    number: "01",
    title: "Habitat & Landscape Connectivity",
    description:
      "Securing the forest corridors that link fragmented patches, so elephant populations can move safely between landscapes.",
  },
  {
    number: "02",
    title: "Human-Elephant Conflict Mitigation",
    description:
      "Working with frontline communities and agencies to reduce conflict and protect people and elephants alike.",
  },
  {
    number: "03",
    title: "Population & Habitat Monitoring",
    description:
      "Field research and biodiversity assessment that track elephant numbers and the health of the forests they depend on.",
  },
  {
    number: "04",
    title: "Captive Elephant Welfare",
    description:
      "Guidance and training that improves the care and management of captive elephants across the region.",
  },
];

// What we do section
const Wedobox = () => {
  return (
    <section className="w-full bg-black px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          What We Do
        </p>

        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Four ways we hold the corridor together
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex min-h-64 flex-col border border-stone-700 bg-stone-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-amber-600">
                {service.number}
              </p>

              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-amber-50">
                {service.title}
              </h3>

              <p className="mt-4 text-sm font-light leading-6 text-amber-50/80">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wedobox;