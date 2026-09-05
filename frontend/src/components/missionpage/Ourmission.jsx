import { useNavigate } from "react-router-dom";

import missionhero from "../images/missionhero.png";

// Mission hero section
const Ourmission = () => {
  const navigate = useNavigate();

  const handleSupportMission = () => {
    navigate("/donate");
  };

  return (
    <section className="w-full bg-[#1f3c28] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
        
        {/* Mission content */}
        <div className="w-full lg:w-3/5">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-black bg-amber-700" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600 sm:text-sm">
              Our Mission
            </p>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
            Protecting forests by protecting wildlife.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-base">
            We are dedicated to conserving forests, protecting
            wildlife, and empowering local communities. Together,
            we can create a sustainable future for both people
            and nature.
          </p>

          <button
            type="button"
            onClick={handleSupportMission}
            className="mt-8 rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-700"
          >
            Support Our Mission
          </button>
        </div>

        {/* Mission image */}
        <div className="w-full lg:w-2/5">
          <img
            src={missionhero}
            alt="Wildlife and forest conservation"
            className="mx-auto w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Ourmission;