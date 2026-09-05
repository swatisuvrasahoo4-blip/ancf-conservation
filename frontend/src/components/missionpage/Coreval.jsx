import conser from "../images/conser.png";
import commun from "../images/commun.png";
import research from "../images/reserch.png";
import sustain from "../images/sustain.png";

const coreValues = [
  {
    image: conser,
    title: "Conservation",
    description:
      "We protect forests and wildlife through science, restoration, and community action.",
  },
  {
    image: commun,
    title: "Community",
    description:
      "We empower local communities and respect their knowledge of nature.",
  },
  {
    image: research,
    title: "Research",
    description:
      "We use scientific research and data to guide every conservation decision.",
  },
  {
    image: sustain,
    title: "Sustainability",
    description:
      "We believe in long-term solutions that benefit both people and nature.",
  },
];

// Core values section
const Coreval = () => {
  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          Our Core Values
        </p>

        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold text-amber-50 sm:text-4xl">
          The values behind our conservation work
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <article
              key={value.title}
              className="flex min-h-64 flex-col items-center rounded-xl border border-teal-800 bg-[#255236] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-lg"
            >
              <img
                src={value.image}
                alt={`${value.title} icon`}
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 font-serif text-lg font-bold text-amber-50">
                {value.title}
              </h3>

              <p className="mt-3 text-sm font-light leading-6 text-amber-50/85">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coreval;