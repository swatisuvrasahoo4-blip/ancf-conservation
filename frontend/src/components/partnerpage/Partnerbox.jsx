// Partner image card
const Partnerbox = ({ img, name = "Conservation partner" }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border-2 border-stone-300 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/9] w-full">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Partnerbox;