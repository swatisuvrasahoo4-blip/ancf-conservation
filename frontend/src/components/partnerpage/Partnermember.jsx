import Box from "./Partnerbox";

import wwf from "../partnerpage/partnerimg/wwf.png";
import wtrust from "../partnerpage/partnerimg/wtrust.png";
import atree from "../partnerpage/partnerimg/atree.png";
import iucn from "../partnerpage/partnerimg/iucn.png";
import traffic from "../partnerpage/partnerimg/traffic.png";
import wcs from "../partnerpage/partnerimg/wcs.png";
import bnhs from "../partnerpage/partnerimg/bnhs.png";
import zoo from "../partnerpage/partnerimg/zoo.png";
import matter from "../partnerpage/partnerimg/matters.webp";

const partners = [
  {
    name: "WWF",
    image: wwf,
  },
  {
    name: "Wildlife Trust of India",
    image: wtrust,
  },
  {
    name: "ATREE",
    image: atree,
  },
  {
    name: "IUCN",
    image: iucn,
  },
  {
    name: "TRAFFIC",
    image: traffic,
  },
  {
    name: "Wildlife Conservation Society",
    image: wcs,
  },
  {
    name: "BNHS",
    image: bnhs,
  },
  {
    name: "Zoo",
    image: zoo,
  },
];

// Partner members section
const Partnermember = () => {
  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Partners */}
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          Our Partners
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <Box
              key={partner.name}
              img={partner.image}
              name={partner.name}
            />
          ))}
        </div>

        {/* Partnership matters */}
        <div className="mt-14 lg:mt-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
            Why Partnership Matters
          </p>

          <div className="mt-7 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={matter}
                alt="Conservation partnership"
                className="h-full max-h-[420px] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#66390A] sm:text-3xl lg:text-4xl">
                Stronger together for conservation
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-700 sm:text-base">
                Conservation is a collective effort. Our partners
                bring expertise, resources and passion that
                strengthen our impact on the ground.
              </p>

              <ul className="mt-6 space-y-3 pl-5 text-sm text-gray-700 sm:text-base">
                <li className="list-disc">
                  Science-based conservation
                </li>

                <li className="list-disc">
                  Stronger community partnerships
                </li>

                <li className="list-disc">
                  Greater impact for wildlife
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnermember;