import { useState } from "react";

import Box from "./Donbox";

import forest from "../Donatepage/donimg/dforest.png";
import elep from "../Donatepage/donimg/delephant.png";
import commun from "../Donatepage/donimg/dcommun.png";
import education from "../Donatepage/donimg/deducate.png";

const faqData = [
  {
    question: "Is my donation tax deductible?",
    answer:
      "Tax benefits depend on the organisation's registration and applicable tax rules. Please check the donation receipt or organisation details for confirmation.",
  },
  {
    question: "How will my donation be used?",
    answer:
      "Your donation can support conservation activities such as forest restoration, elephant protection, community programs and awareness initiatives.",
  },
  {
    question: "Can I donate from outside India?",
    answer:
      "International donations may depend on the payment method and the organisation's eligibility to receive foreign contributions.",
  },
  {
    question: "How can I get involved other than donating?",
    answer:
      "You can support conservation by volunteering, spreading awareness, participating in campaigns and sharing educational resources.",
  },
];

const Ourdonate = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleDonate = () => {
    const donationSection =
      document.getElementById("donation-section");

    donationSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="donation-section"
      className="w-full bg-amber-50"
    >
      {/* Donation areas */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
          Our Donate
        </p>

        <h2 className="mt-2 max-w-2xl font-serif text-2xl font-bold text-[#1f3c28] sm:text-3xl">
          Choose where your support can make an impact
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <Box
            img={forest}
            hd="Forest Restoration"
            dtext="Restore degraded forests and create safe habitats for elephants and other wildlife."
          />

          <Box
            img={elep}
            hd="Elephant Protection"
            dtext="Ensure the safety, rescue and long-term conservation of endangered Asian elephants."
          />

          <Box
            img={commun}
            hd="Community Support"
            dtext="Empower local communities through education and conservation partnerships."
          />

          <Box
            img={education}
            hd="Education & Awareness"
            dtext="Inspire people to protect nature through school programs."
          />
        </div>
      </div>

      {/* FAQ and call to action */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        {/* FAQ */}
        <div className="bg-amber-100 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold text-[#66390A] sm:text-3xl">
            Donation questions
          </h2>

          <div className="mt-7">
            {faqData.map((item, index) => (
              <div
                key={item.question}
                className="border-b border-[#66390A]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-serif text-base text-[#66390A] sm:text-lg">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-2xl font-bold text-[#66390A]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="pb-5 pr-8 text-sm leading-6 text-[#6d4b2b] sm:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="flex min-h-80 items-center justify-center bg-amber-700 px-5 py-12 sm:px-8 lg:px-12">
          <div className="max-w-xl text-center">
            <h2 className="font-serif text-3xl font-bold text-amber-50 sm:text-4xl lg:text-5xl">
              Help us protect tomorrow.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-amber-50/90 sm:text-base">
              Together, we can create a future where forests
              thrive and elephants roam free. Every donation
              brings us one step closer to a healthier planet.
            </p>

            <button
              type="button"
              onClick={handleDonate}
              className="mt-7 rounded-full bg-[#1f3c28] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#2f5a3d] hover:-translate-y-0.5"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourdonate;