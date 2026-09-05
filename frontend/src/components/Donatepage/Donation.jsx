import heros from "../images/donatehero.avif";

// Donation hero section
const Donation = () => {
  const handleDonate = () => {
    const donationSection = document.getElementById(
      "donation-section"
    );

    donationSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[430px] lg:min-h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heros})`,
      }}
    >
      {/* Light overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/35" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-14 sm:py-18 lg:py-20">
        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1f3c28] uppercase">
          Every Donation Counts
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-[#17251c] leading-tight">
          Working together for conservation.
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#24372b] leading-relaxed">
          Your support helps us protect elephants,
          restore habitats and support communities.
        </p>

        <button
          type="button"
          onClick={handleDonate}
          className="mt-7 inline-flex items-center justify-center min-w-40 rounded-full bg-[#1f3c28] px-7 py-3 text-sm sm:text-base font-medium text-white shadow-md transition duration-300 hover:bg-[#2f5a3d] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1f3c28] focus:ring-offset-2"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Donation;