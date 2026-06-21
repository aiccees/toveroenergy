"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HeroImg from "@/public/images/home/hero_img.png";
import Rean from "@/public/images/home/rean.png";
import Nacc from "@/public/images/home/NACC.jpeg";
import CustomButton from "../button/button";
import { Button } from "@/components/ui/button";
import herobg0 from "@/public/images/home/herobg0.jpg";
import herobg1 from "@/public/images/home/herobg1.jpg";
import herobg2 from "@/public/images/home/herobg2.jpg";
import herobg7 from "@/public/images/home/herobg7.jpg";

const BACKGROUND_IMAGES = [
  herobg0,
  herobg1,
  herobg2,
  herobg7,
];

const CONFERENCE_DATE = "2026-09-24T00:00:00Z";

function AicceesCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date(CONFERENCE_DATE).getTime();

    const updateTimeLeft = () => {
      setTimeLeft(targetDate - Date.now());
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return (
      <div
        className="flex items-center justify-center gap-2 text-white text-sm sm:text-lg md:text-2xl font-semibold bg-black/40 rounded-lg px-3 sm:px-4 py-2 shadow-lg min-h-[44px]"
        aria-hidden="true"
      >
        <Clock className="text-yellow-400 mr-1" />
        <span>--d</span>:<span>--h</span>:<span>--m</span>:<span>--s</span>
      </div>
    );
  }

  if (timeLeft <= 0) {
    return (
      <span className="text-2xl font-bold text-red-600">
        Conference is Live!
      </span>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-lg md:text-2xl font-semibold bg-black/40 rounded-lg px-3 sm:px-4 py-2 shadow-lg">
      <span className="flex items-center gap-1">
        <Clock className="text-yellow-400 mr-1" />
        <span className="text-white hidden sm:block">Days left:</span>
      </span>
      <span>{days}d</span>:
      <span>{hours}h</span>:
      <span>{minutes}m</span>:
      <span>{seconds}s</span>
    </div>
  );
}

function ToveroHeroSlide() {
  return (
    <div className="w-full mx-auto md:mx-0 my-0 h-auto lg:min-h-screen lg:h-screen flex-col lg:flex-row flex justify-between overflow-hidden bg-white">
      <div className="w-full lg:w-1/2 flex flex-col mt-16 justify-center md:px-16">
        <div className="w-full font-header text-4xl mb-2">
          <h1 className="text-center md:text-left">
            Healing<span className="text-ltgreentext"> Earth,</span>
          </h1>
          <h1 className="text-center md:text-left">Solving Carbon Problems</h1>
        </div>

        <p className="ptag text-center md:text-justify mb-2">
          Tovero Energy has strategically positioned itself as a dependable
          partner as we lead discussions on how we can develop energy systems
          that are both resilient to prevailing climatic conditions, and capable
          to meet the growing demand for energy in ways that are both clean and
          sustainable.
        </p>
        <br />
        <Link href="https://aiccees.com" target="_blank">
          <div className="flex justify-center md:justify-start">
            <CustomButton variant="primary">SEE EVENTS</CustomButton>
          </div>
        </Link>

        <br />
        <div className="flex gap-2 items-center justify-center md:justify-start mt-2 mb-6 lg:mb-0">
          <Image src={Rean} alt="logo" />
          <div>
            <p className="ptag">Tovero Energy Ltd is a member of </p>
            <p className="ptag">Renewable Energy Association of Nigeria</p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center md:justify-start mt-2 mb-6 lg:mb-0">
          <Image src={Nacc} className="w-24" alt="logo" />
          <div>
            <p className="ptag">Tovero Energy Ltd is a member of </p>
            <p className="ptag">Nigerian Alliance for Clean Cooking</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Image src={HeroImg} alt="Hero Image" loading="lazy" className="" />
      </div>
    </div>
  );
}

function AicceesHeroSlide() {
  const hasBackgroundImages = BACKGROUND_IMAGES.length > 0;

  return (
    <section className="w-full relative overflow-hidden py-10 px-4 sm:py-12 lg:min-h-screen lg:h-screen lg:py-0 bg-gradient-to-r from-green-600/90 to-green-800/90">
      {hasBackgroundImages && (
        <div className="absolute inset-0 z-[1]">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            className="h-full w-full"
          >
            {BACKGROUND_IMAGES.map((image, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {hasBackgroundImages && (
        <div className="absolute z-[2] inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90 transition-all duration-700" />
      )}

      <div className="relative z-[3] container mx-auto lg:h-full px-2 md:px-6 lg:flex lg:items-center">
        <div className="flex w-full flex-col items-center space-y-4 text-center pb-6 lg:pb-0">
          <div className="space-y-3 text-center">
            <p className="inline-flex rounded-full bg-red-600/90 px-4 py-1 text-xs sm:text-sm font-semibold text-white shadow-sm">
              Innovation Challenge applications are now open
            </p>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Africa International Conference on Clean Energy & Energy Storage
              (AICCEES)
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 text-base sm:text-lg md:text-xl">
              Empowering Africa&apos;s Future Through Clean Energy Innovation
              and Sustainable Storage Solutions
            </p>
          </div>
          <div className="flex w-full max-w-md sm:max-w-none flex-col sm:flex-row items-center justify-center gap-3 !mb-8 md:!mb-10">
            <Button
              asChild
              className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700"
            >
              <Link href="https://aiccees.com/registrations" target="_blank">
                Register Now
              </Link>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-100"
            >
              <Link
                href="https://aiccees.com/innovation-challenge"
                target="_blank"
              >
                Innovation Challenge
              </Link>
            </Button>
            <Button
              asChild
              variant="destructive"
              className="w-full sm:w-auto !bg-red-600 text-white hover:bg-red-700"
            >
              <Link href="https://aiccees.com" target="_blank">
                Submit Paper
              </Link>
            </Button>
          </div>
          <AicceesCountdownTimer />
        </div>
      </div>
    </section>
  );
}

export default function HomeHeroCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ToveroHeroSlide />;
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      speed={700}
      autoHeight={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="home-hero-carousel w-full overflow-hidden"
      onSlideChangeTransitionEnd={(swiper) => swiper.updateAutoHeight()}
    >
      <SwiperSlide className="!w-full">
        <ToveroHeroSlide />
      </SwiperSlide>
      <SwiperSlide className="!w-full">
        <AicceesHeroSlide />
      </SwiperSlide>
    </Swiper>
  );
}
