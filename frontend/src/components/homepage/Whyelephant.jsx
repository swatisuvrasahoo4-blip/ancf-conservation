import elep from "../images/whyele.png";

// Why the elephant section
const Whyelephant = () => {
  return (
    <section className="w-full bg-amber-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        
        {/* Elephant image */}
        <img
          src={elep}
          alt="Asian elephant"
          className="h-16 w-auto object-contain sm:h-20"
        />

        {/* Section label */}
        <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-amber-600 sm:text-sm">
          Why the Elephant
        </p>

        {/* Heading */}
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-[#1f3c28] sm:text-4xl lg:text-5xl">
          A keystone species carries a whole forest.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
          Asian elephants shape the forests they move through —
          opening clearings, dispersing seeds across long distances,
          and carving paths that smaller species rely on. Where
          elephant range shrinks through habitat fragmentation and
          illegal hunting, the wider ecosystem loses its architect.
          Protecting the species means protecting everything underneath
          the canopy.
        </p>
      </div>
    </section>
  );
};

export default Whyelephant;