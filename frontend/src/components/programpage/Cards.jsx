// Program card
const Cards = ({
  img,
  hd,
  paratext,
  onLearnMore,
}) => {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-300 bg-amber-50 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row">
      
      {/* Card image */}
      <div className="w-full shrink-0 sm:w-2/5">
        <img
          src={img}
          alt={hd}
          className="h-48 w-full object-cover sm:h-full"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-base font-bold leading-snug text-[#66390A] sm:text-lg">
          {hd}
        </h3>

        <p className="mt-3 flex-1 font-serif text-sm leading-6 text-[#66390A]/80">
          {paratext}
        </p>

        <button
          type="button"
          onClick={onLearnMore}
          className="mt-5 w-fit cursor-pointer font-serif text-sm font-bold text-amber-700 transition hover:text-amber-900"
        >
          Learn More →
        </button>
      </div>
    </article>
  );
};

export default Cards;