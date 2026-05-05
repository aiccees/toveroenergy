"use client"

  import IdenticalHero from "@/components/hero/hero";
  import heroImg from "@/public/telephone.png";
import gis from "@/public/gis.png";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Image from "next/image";
import ContactForm from "@/components/contact/contact";
import { motion } from "framer-motion";

function ContactUs() {
  const title = "CONTACT US";
  const description =
    "We strive to respond to all messages promptly and ensure that your experience with us is positive.";
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
      <br />

      <div className="w-full lg:w-[90%] my-0 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col lg:flex-row items-center"
        >
          <div className="w-full lg:w-[45%] flex flex-col justify-center bg-drkgreenbg h-auto lg:h-[90vh] text-white py-4 px-5 r">
            <div className="bg-drkgreencard py-4 px-3 mb-4">
              <h1 className="font-header text-xl ml-2">MAKE A CALL</h1>
              <div className="flex items-center gap-2">
                <FaPhoneAlt color="#ffffff" />
                <div>
                  <h1 className="">+234 803 764 1860</h1>
                  <p className="text-[12px]">Mon - Fri; 8AM - 5PM</p>
                </div>
              </div>
            </div>
            <div className="bg-drkgreencard py-4 px-3 mb-4">
              <h1 className="font-header text-xl ml-2">SEND A MAIL</h1>
              <div className="flex items-center gap-2">
                <TbMailFilled color="#ffffff" />

                <h1 className="">Info@toveroenergy.com</h1>
              </div>
            </div>
            <div className="bg-drkgreencard py-4 px-3 mb-4">
              <h1 className="font-header text-xl ml-2">OUR MAIN OFFICE</h1>
              <div className="flex items-center gap-2">
                <Image src={gis} alt="" width={27} />

                <p className="text-justify">
                  4 Pius Chuku Close, off Eze Nvuigwe Avenue, Woji, Port
                  Harcourt, Rivers State, Nigeria.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}

export default ContactUs;
