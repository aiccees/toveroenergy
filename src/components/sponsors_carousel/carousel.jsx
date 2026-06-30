import mecs from "@/public/images/home/mecs.svg";
import asteven from "@/public/images/home/asteven.svg";
import enerpro from "@/public/images/home/enerpro.svg";
import trans from "@/public/images/home/trans.svg";
import uniport from "@/public/images/home/unipor.svg";
import inmotv from "@/public/images/home/inmotv.jpg";
import tennLogo from "@/public/images/home/tenn-logo.png";
import Image from "next/image";
import { cn } from "@/utils/utils";

const sponsors_list = [
  { id: 1, image: mecs },
  { id: 2, image: asteven },
  { id: 3, image: enerpro },
  { id: 4, image: trans },
  { id: 5, image: uniport },
  { id: 6, image: inmotv },
  { id: 7, image: tennLogo },
];

function SponsorLogo({ item }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6 md:px-10">
      <Image
        src={item.image}
        alt={`sponsor image ${item.id}`}
        className={cn(
          "h-10 w-auto object-contain md:h-14",
          [6, 7].includes(item.id) && "h-14 md:h-20"
        )}
      />
    </div>
  );
}

function SponsorsCarousel() {
  const marqueeItems = [...sponsors_list, ...sponsors_list];

  return (
    <div className="sponsors-marquee w-full overflow-hidden">
      <div className="sponsors-marquee-track flex w-max items-center">
        {marqueeItems.map((item, index) => (
          <SponsorLogo key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SponsorsCarousel;
