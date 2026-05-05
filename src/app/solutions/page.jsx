"use client";

import IdenticalHero from "@/components/hero/hero";
import heroImg from "@/public/images/publishers/publishers_hero.png";
import { solutionsData } from "@/data_models/solutions";
import Image from "next/image";
import CustomButton from "@/components/button/button";
import { motion } from "framer-motion";

function Solutions() {
  const title = "SOLUTIONS";
  const description =
    "By embracing innovation and collaboration, we're working to create a more sustainable future for all. Join us on our journey to a brighter, cleaner, and more sustainable tomorrow. Together, we can harness the power of energy solutions to build a better world for generations to come.";
  return (
    <main>
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <IdenticalHero
        title={title}
        description={description}
        HeroImg={heroImg}
      />
      <br />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className="w-[90%] my-0 mx-auto"
      >
        <div className="bg-cardbg flex flex-col lg:flex-row justify-between items-center gap-2 py-8 px-4 mb-4">
          <div className="w-full lg:w-[20%] text-prigreentext font-header lg:border-r lg:border-r-prigreentext font-extrabold text-2xl">
            <h1 className="text-center md:text-start">CLEAN COOKING</h1>
            <h1 className="text-center md:text-start">SOLUTIONS</h1>
          </div>
          <div className="w-full lg:w-[80%]">
            <p className="ptag text-center md:text-start">
              Our clean cooking solutions offer environmentally friendly and
              efficient alternatives to traditional cooking methods, promoting
              healthier cooking practices and reducing environmental impact. We
              offer a range of options to suit different needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-auto">
          {solutionsData.map((card) => (
            <div key={card.id} className="relative bxshadow rounded-md">
              <Image
                src={card.image}
                alt={`solutions ${card.title}`}
                className="rounded-t-md w-full "
              />
              <div className="flex flex-col justify-between py-4 px-1 md:px-6">
                <div className="h-[17rem] w-full">
                  <h1 className="text-xl font-bold text-prigreentext text-center lg:text-start">
                    {card.title}
                  </h1>
                  <p className="ptag text-sm text-center md:text-start">
                    {card.description}
                  </p>
                </div>
                <br />
                {/* <br /> */}
                <div className="flex justify-center lg:justify-start">
                  <CustomButton className="w-11/12 lg:w-auto absolute bottom-6">
                    REQUEST FOR PURCHASE
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
      </motion.div>
    </main>
  );
}

export default Solutions;
