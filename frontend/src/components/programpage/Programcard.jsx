import Cards from "./Cards";

import habitat from "../images/habitat.avif";
import community from "../images/community.webp";
import research from "../images/research.webp";
import education from "../images/education.webp";
import plant from "../images/plantation.webp";
import resc from "../images/rescue.webp";
import elep from "../images/elephant.webp";

const programs = [
  {
    image: habitat,
    title: "Habitat Connectivity",
    description:
      "We restore and connect fragmented forests, creating safe wildlife corridors that allow all species to move freely while reducing human-wildlife conflict.",
  },
  {
    image: community,
    title: "Community Development",
    description:
      "We collaborate with local communities by promoting sustainable livelihoods and eco-friendly practices that benefit both people and nature.",
  },
  {
    image: education,
    title: "Education & Awareness",
    description:
      "Through workshops, school programs, and awareness campaigns, we inspire people of all ages to understand, appreciate, and protect the natural environment.",
  },
  {
    image: research,
    title: "Research & Monitoring",
    description:
      "Our research teams monitor wildlife populations, track habitat changes, and collect scientific data to support effective conservation strategies.",
  },
  {
    image: plant,
    title: "Tree Plantation",
    description:
      "We organize plantation drives to restore degraded forests, increase biodiversity, and build healthier ecosystems that support wildlife and future generations.",
  },
  {
    image: resc,
    title: "Wildlife Rescue & Rehabilitation",
    description:
      "Our dedicated rescue teams provide emergency care, rehabilitation, and safe release for injured, orphaned, and endangered animals in their natural habitats.",
  },
];

// Programs section
const Programcard = () => {
  const handleLearnMore = (program) => {
    console.log(`Learn more about ${program}`);
  };

  return (
    <section className="w-full bg-amber-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          Our Programs
        </p>

        {/* Program cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <Cards
              key={program.title}
              img={program.image}
              hd={program.title}
              paratext={program.description}
              onLearnMore={() =>
                handleLearnMore(program.title)
              }
            />
          ))}
        </div>

        {/* Featured project */}
        <article className="mt-12 grid w-full grid-cols-1 overflow-hidden rounded-2xl border-2 border-gray-300 bg-white lg:grid-cols-2">
          <div className="w-full">
            <img
              src={elep}
              alt="Elephant Corridor Restoration"
              className="h-64 w-full object-cover sm:h-80 lg:h-full"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              Featured Project
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#66390A] sm:text-4xl">
              Elephant Corridor Restoration
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
              Restoring connected habitats helps wildlife move
              safely while supporting healthier forests and nearby
              communities.
            </p>

            <ul className="mt-6 space-y-3 pl-5 text-sm text-gray-700 sm:text-base">
              <li className="list-disc">
                50+ villages involved
              </li>

              <li className="list-disc">
                3,000 hectares of habitat protected
              </li>

              <li className="list-disc">
                120+ elephants benefited
              </li>

              <li className="list-disc">
                Reduced human-wildlife conflict
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Programcard;