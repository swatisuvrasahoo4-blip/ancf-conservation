import { useNavigate } from "react-router-dom";

// Partnership call-to-action section
const Partnerus = () => {
  const navigate = useNavigate();

  const handlePartner = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-amber-700 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-50 sm:text-sm">
          Become Our Partner
        </p>

        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Let's work together for a sustainable tomorrow.
        </h2>

        <button
          type="button"
          onClick={handlePartner}
          className="mt-7 rounded-full bg-[#1f3c28] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5a3d] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
        >
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default Partnerus;