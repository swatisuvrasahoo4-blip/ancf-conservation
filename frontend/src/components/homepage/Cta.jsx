import { useNavigate } from "react-router-dom";

// Conservation call-to-action section
const Cta = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-amber-700 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100">
          Support Conservation
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Help hold the corridor.
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-6 text-amber-50 sm:text-base sm:leading-7">
          Every gift funds field research, community
          partnerships, and the corridors that keep Asian
          elephant landscapes connected.
        </p>

        <button
          type="button"
          onClick={handleContact}
          className="mt-7 rounded-full bg-[#1f3c28] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#2f5a3d] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-700"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Cta;