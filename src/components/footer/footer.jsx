import Image from "next/image";
import hdrElipses from "@/public/images/home/ellipse.png";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";
import Link from "next/link";
import FooterLogo from "@/public/logo_footer.png";

function Footer() {
  return (
    <footer className="text-base md:text-[14px] w-[95%] lg:w-[90%] my-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 md:gap-y-8 gap-y-6 text-primarytext">
        <div className="flex flex-col items-center md:items-start justify-between">
          <Image src={FooterLogo} alt="footer logo" />

          <div className="hidden md:block">
            <div className="flex justify-between gap-6">
              <div>
                <p className="text-[12px]">Email</p>
                <p className="text-[12px]">info@toveroenergy.com</p>
              </div>
              <div>
                <p className="text-[12px]">Phone number</p>
                <p className="text-[12px]">+2348037641860</p>
              </div>
            </div>
            <br />
            <div className="hidden md:flex justify-between">
              <Link
                href="https://www.linkedin.com/company/76421340/admin/feed/posts/"
                className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
              >
                <IoLogoLinkedin />
              </Link>
              <Link
                href="https://x.com/ToveroEnergy?s=09"
                className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
              >
                <IoLogoTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/@toveroenergy3932/streams"
                className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
              >
                <IoLogoYoutube />
              </Link>
              <Link
                href="https://x.com/ToveroEnergy?s=09"
                className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
              >
                <IoLogoFacebook />
              </Link>
              <Link
                href=""
                className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
              >
                <IoLogoInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-Headertext font-header">
            Our Services
          </h3>
          <br />
          <Link href="/services">
            <p className="mb-2">Energy Planning & Audit</p>
          </Link>
          <Link href="/services">
            <p className="mb-2">Energy Advisory</p>
          </Link>
          <Link href="/services">
            <p className="mb-2">Mini-grid Design</p>
          </Link>
          <Link href="/services">
            <p className="mb-2">Clean Cooking Solutions</p>
          </Link>
          <Link href="/services">
            <p className="mb-2">Energy System Design & Development</p>
          </Link>
          <Link href="/services">
            <p className="mb-2">Energy Education & Advocacy</p>
          </Link>
          <Link href="/services">
            <p className="mb-2"> PURE Technology Solutions</p>
          </Link>
          <Link href="/services">
            <p className="mb-2"> E-Waste Disposal & Recycling</p>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold font-header text-Headertext">
            Quick Links
          </h3>
          <br />
          <Link href="/publications">
            <p className="mb-2">Publications</p>
          </Link>
          <Link href="https://aiccees.com" target="_blank">
            <p className="mb-2">AICCEES</p>
          </Link>
          {/* <Link href="/tovero">
            <p className="mb-2">TSET</p>
          </Link> */}

        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold font-header text-Headertext">
            Location
          </h3>
          <br />

          <p className="w-1/2 md:w-full mb-2 text-center md:text-justify">
            4 Pius Chuku Close, off Eze Nvuigwe Avenue, Woji, Port Harcourt,
            Rivers State, Nigeria.
          </p>
        </div>
        <hr className="md:hidden" />
        <div className="block md:hidden">
          <div className="flex justify-between">
            <div>
              <p>Email</p>
              <p>info@toveroenergy.com</p>
            </div>
            <div>
              <p>Phone number</p>
              <p>+2348133426978</p>
            </div>
          </div>
          <br />
          <div className="flex md:hidden justify-between">
            <Link
              href="https://www.linkedin.com/company/76421340/admin/feed/posts/"
              className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              href="https://x.com/ToveroEnergy?s=09"
              className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
            >
              <IoLogoTwitter />
            </Link>
            <Link
              href="https://www.youtube.com/@toveroenergy3932/streams"
              className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
            >
              <IoLogoYoutube />
            </Link>
            <Link
              href="https://x.com/ToveroEnergy?s=09"
              className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
            >
              <IoLogoFacebook />
            </Link>
            <Link
              href=""
              className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]"
            >
              <IoLogoInstagram />
            </Link>
          </div>
        </div>
      </div>
      <br />

      <hr />

      <div className="w-full flex flex-col lg:flex-row justify-between py-6">
        <div className="flex justify-center lg:justify-start">
          <p className="text-[#c0c0c0]">
            Copyright{" "}
            <span className="text-[#828282]">Tovero Energy Ltd. 2024</span>
          </p>
        </div>

        <div className="w-full lg:w-[40%] flex justify-between items-center text-[#828282] text-[14px]">
          <Link href="#">
            <p>Terms and Conditions </p>
          </Link>

          <Link href="https://drive.google.com/file/d/1S3dWvfSukizZceCQr3R4m-cknBAYx7Tb/view?usp=drive_link">
            <p>Privacy Policy </p>
          </Link>

          <Link href="#">
            <p>NDPR Accredited </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
