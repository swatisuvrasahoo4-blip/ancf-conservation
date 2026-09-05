// Image card
const Box = ({ img, name = "ANCF program" }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <div className="aspect-[16/9] w-full">
        <img
          src={img}
          alt={name}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Box;