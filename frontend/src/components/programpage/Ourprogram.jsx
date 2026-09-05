import heros from "../images/programhero.png";

// Programs hero section
const Ourprogram = () => {
  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
        
        {/* Program content */}
        <div className="w-full lg:w-3/5">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 shrink-0 rounded-full bg-amber-700" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-50 sm:text-sm">
              Our Programs
            </p>
          </div>

          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
            Working together for conservation.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-base">
            Our programs focus on protecting habitats, supporting
            communities and ensuring a safe future for elephants.
          </p>
        </div>

        {/* Program image */}
        <div className="w-full lg:w-2/5">
          <img
            src={heros}
            alt="ANCF conservation programs"
            className="mx-auto w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Ourprogram;