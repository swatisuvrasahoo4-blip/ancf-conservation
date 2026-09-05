// Donation information card
const Donbox = ({ img, hd, dtext }) => {
  return (
    <div className="w-full max-w-sm min-h-36 flex items-center gap-4 border-2 border-[#66390A] rounded-2xl p-4 transition duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Image */}
      <div className="shrink-0">
        <img
          src={img}
          alt={hd}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className="font-bold font-serif text-base sm:text-lg text-[#66390A] leading-snug">
          {hd}
        </h3>

        <p className="mt-2 font-serif text-sm sm:text-base text-[#66390A] leading-relaxed">
          {dtext}
        </p>
      </div>
    </div>
  );
};

export default Donbox;