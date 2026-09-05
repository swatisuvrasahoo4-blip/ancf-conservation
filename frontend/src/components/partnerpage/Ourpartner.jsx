import heros from "../images/partnershero.png";

// Partners hero section
const Ourpartner = () => {
  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
        
        {/* Partner content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-700" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600 sm:text-sm">
              Our Partners
            </p>
          </div>

          <h1 className="mt-5 max-w-xl font-serif text-4xl font-bold leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
            Together for a better future.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-amber-50/90 sm:text-base">
            Our programs focus on protecting habitats, supporting
            communities and ensuring a safe future for elephants.
          </p>
        </div>

        {/* Partner image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heros}
            alt="Conservation partners working together"
            className="mx-auto w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Ourpartner;