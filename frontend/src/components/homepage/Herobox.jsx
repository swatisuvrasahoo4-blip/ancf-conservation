import { useNavigate } from "react-router-dom";

import heros from "../images/hero.png";

// Home hero section
const Herobox = () => {
  const navigate = useNavigate();

  const handleSupport = () => {
    navigate("/donate");
  };

  const handlePrograms = () => {
    navigate("/program");
  };

  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
        
        {/* Hero content */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-4 w-4 rounded-full border-2 border-black bg-amber-700" />

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-100 sm:text-sm">
              Asian Nature Conservation Foundation · Est. 1997
            </p>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
            Where the canopy holds, the herds still roam.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-base">
            We protect the forest corridors of South and Southeast Asia
            so the Asian elephant — a keystone species for the whole
            landscape — can move, feed and breed without losing ground
            to fragmentation and conflict.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleSupport}
              className="rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-amber-700"
            >
              Support a Corridor
            </button>

            <button
              type="button"
              onClick={handlePrograms}
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-[#1f3c28]"
            >
              Our Programs
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full lg:w-2/5">
          <img
            src={heros}
            alt="Asian elephant conservation"
            className="mx-auto w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Herobox;