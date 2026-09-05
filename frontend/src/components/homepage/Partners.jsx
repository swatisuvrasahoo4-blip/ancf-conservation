import { Link } from "react-router-dom";

const partners = [
  {
    name: "Wildlife Trust of India",
    website: "wti.org.in",
  },
  {
    name: "ATREE",
    website: "atree.org",
  },
  {
    name: "World Wildlife Fund",
    website: "worldwildlife.org",
  },
  {
    name: "Sierra Club - Climate",
    website: "sierraclub.org/issues/climate",
  },
];

// Conservation partners section
const Partners = () => {
  return (
    <section className="w-full bg-yellow-900 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs font-light uppercase tracking-[0.15em] text-amber-50 sm:text-sm">
            Conservation Partners & Resources
          </p>

          <Link
            to="/partner"
            className="w-fit text-sm font-medium text-amber-50 transition duration-200 hover:text-amber-300"
          >
            View All Partners →
          </Link>
        </div>

        {/* Partner cards */}
        <div className="mt-7 grid grid-cols-1 border-t border-amber-50/40 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border-b border-amber-50/40 py-6 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <h3 className="text-sm font-bold text-white">
                {partner.name}
              </h3>

              <p className="mt-2 break-words text-sm font-light text-amber-50/80">
                {partner.website}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;