"use client";

import IdenticalHero from "@/components/hero/hero";
import heroImg from "@/public/images/publishers/publishers_hero.png";
import { journalPublications, publisherInfo, publisherMore, sparksReport } from "@/data_models/publishers";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

function Publications() {
  const title = "PUBLICATIONS";
  const description =
    "These publications are focused on energy research and aims to contribute to the discourse on sustainable energy solutions, advancements in renewable energy technologies, and the challenges facing the energy sector.";
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
      <br />
      <div className="w-[90%] my-0 mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="ptag font-bold text-2xl">
            Tonipash Sustainable Energy Talks(TSET) - Reports
          </p>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            {publisherInfo.map((card, index) => (
              <div
                key={card.id}
                className="bg-cardbg flex justify-between py-2 px-4"
              >
                <div className="flex items-center gap-2">
                  <Image src={card.icon} alt="book icon" />
                  <p className="font-bold text-sm">{card.text}</p>
                </div>
                <Link
                  href={card.link}
                  className="flex items-end justify-between text-redtext underline text-[12px]"
                >
                  <p>Download</p>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="ptag font-bold text-2xl">
            Conference Publications
          </p>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            {journalPublications.map((card, index) => (
              <div
                key={card.id}
                className="bg-cardbg flex justify-between py-2 px-4"
              >
                <div className="flex items-center gap-2">
                  <Image src={card.icon} alt="book icon" />
                  <p className="font-bold text-sm">{card.text}</p>
                </div>
                <Link
                  href={card.link}
                  className="flex items-end justify-between text-redtext underline text-[12px]"
                >
                  <p>Download</p>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="ptag font-bold text-2xl">
            54 sparks report
          </p>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            {sparksReport.map((card, index) => (
              <div
                key={card.id}
                className="bg-cardbg flex justify-between py-2 px-4"
              >
                <div className="flex items-center gap-2">
                  <Image src={card.icon} alt="book icon" />
                  <p className="font-bold text-sm">{card.text}</p>
                </div>
                <Link
                  href={card.link}
                  className="flex items-end justify-between text-redtext underline text-[12px]"
                >
                  <p>Download</p>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        <br />
        <br />

        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

export default Publications;
