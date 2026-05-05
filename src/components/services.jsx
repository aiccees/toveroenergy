"use client";

import Image from "next/image";
import heroImg from "@/public/images/services/hero_services_img.png";
import { serviceHeaders, serviceInfo } from "@/data_models/services_detail";
import { motion } from "framer-motion";

// //// SWIPER IMPORTS /////// //
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import IdenticalHero from "./hero/hero";
import { useNavigationContext } from "@/context/navContext";
import { useEffect } from "react";

function Services() {
  const title = "OUR SERVICES";
  const description =
    "From renewable sources to cutting-edge technologies, we strive to deliver reliable and efficient energy services that empower your success while safeguarding the planet for future generations.";

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const swiperRef = useRef(null);

  // const isActive = (index) => {
  //   setActiveIndex(index);
  //   setSelectedIndex(index);
  //   swiperRef.current?.swiper.slideTo(index);
  // };
  // const handleSwiperSlideChange = (swiper) => {
  //   setSelectedIndex(swiper.activeIndex);
  //   setActiveIndex(swiper.activeIndex);
  // };
  const { activeIndex, swiperRef, isActive, handleSwiperSlideChange } =
    useNavigationContext();

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on("slideChange", () =>
        handleSwiperSlideChange(swiperInstance)
      );
    }
  }, [swiperRef, handleSwiperSlideChange]);

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

      <div className="w-[95%] md:w-[90%] h-auto my-0 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-fit"
        >
          <div className="hidden lg:grid grid-cols-6 gap-4 mb-2 ">
            {serviceHeaders.map((item, index) => (
              <div
                key={index}
                onClick={() => isActive(index)}
                className={`bxshadow w-full h-12 flex p-2 justify-center items-center rounded-md cursor-pointer ${activeIndex === index
                    ? "border-b-red-500 border-4 text-ltgreentext"
                    : "text-primarytext"
                  }`}
              >
                <p className="text-[12px] font-bold text-center text-wrap">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden w-full gap-4 mb-2 overflow-x-auto">
            {serviceHeaders.map((item, index) => (
              <div
                key={index}
                onClick={() => isActive(index)}
                className={`bxshadow w-full h-16 md:h-12 flex p-2 justify-center items-center rounded-md cursor-pointer ${activeIndex === index
                    ? "border-b-red-500 border-4 text-ltgreentext"
                    : "text-primarytext"
                  }`}
              >
                <p className="text-[12px] font-bold text-center w-[200px] lg:w-auto">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <br />
          <Swiper
            ref={swiperRef}
            // onSlideChange={handleSwiperSlideChange}
            modules={[Pagination, Scrollbar, Navigation]}
            slidesPerView={1}
          >
            {serviceInfo.map((item, index) => (
              <div className="h-auto" key={item.id}>
                <SwiperSlide>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div
                      className={`w-full lg:w-[40%] mb-4 lg:mb-0${activeIndex === 1 ? "order-2" : ""
                        }${activeIndex === 3 ? "order-2" : ""}${activeIndex === 5 ? "order-2" : ""
                        }`}
                    >
                      <Image
                        src={item.image}
                        alt="image slide"
                        className="w-full"
                      />
                    </div>

                    <div className="w-full lg:w-[58%] flex flex-col justify-center gap-3 order-2">
                      <h1 className="font-header text-3xl font-bold mb-2 lg:mb-0">
                        {item.title}
                      </h1>
                      <p className="ptag">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <br className="hidden lg:block" />
      <br className="hidden lg:block" />
      <br className="hidden lg:block" />
    </main>
  );
}

export default Services;
