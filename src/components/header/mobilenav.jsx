import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useNavigationContext } from "../../context/navContext";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CustomButton from "../button/button";
import { motion } from "framer-motion";

function MobileNavBar({ closeNav }) {
  const { isActive, swiperRef, handleSwiperSlideChange } =
    useNavigationContext();
  const [showServDropdown, setServShowDropdown] = useState(false);
  const [showConDropdown, setConShowDropdown] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/services") {
      window.scrollTo({ top: 580, behavior: "smooth" });
    }
  }, [pathname]);

  useEffect(() => {
    // Function to detect click outside the navbar
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav(); // Call the function passed as prop to close the navbar
      }
    };

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="text-primarytext pb-4 mt-4">

      <div className="mb-8">
        <div
          onClick={() => {
            setServShowDropdown(!showServDropdown);
            setConShowDropdown(false);
          }}
          className="flex items-center gap-[2px] cursor-pointer mb-4"
        >
          <p>Services</p>
          <ChevronDown size={15} />
        </div>

        <div className={`${showServDropdown ? "block" : "hidden"} pl-4`}>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(0);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>Energy Planning & Audit</p>
          </motion.div>
            <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(1);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>Energy Advisory</p>
          </motion.div>
            
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(2);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>Mini-grid Design</p>
          </motion.div>
        <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(3);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>Clean Cooking Solutions</p>
          </motion.div>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(4);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>Energy Systems Design & Development</p>
          </motion.div>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(5);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p> Energy Education & Advocacy</p>
          </motion.div>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(5);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>PURE Technology Solutions</p>
          </motion.div>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(6);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p>E-waste Disposal & Recycling</p>
          </motion.div>
          {/* <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            onClick={() => {
              isActive(7);
              router.push("/services");
              closeNav();
            }}
            className="mb-4"
          >
            <p> E-Waste Disposal & Recycling</p>
          </motion.div> */}
        </div>
      </div>

      <div className="mb-8">
        <div
          onClick={() => {
            setConShowDropdown(!showConDropdown);
            setServShowDropdown(false);
          }}
          className="flex items-center gap-[2px] cursor-pointer mb-4"
        >
          <p>Conferences</p>
          <ChevronDown size={15} />
        </div>
        <div className={`${showConDropdown ? "block" : "hidden"} pl-4`}>
          <motion.div
            whileTap={{ backgroundColor: "#F1F2F3" }}
            className="mb-4"
          >
            <Link href="https://aiccees.com" target="_blank">
              <p onClick={closeNav}>
                Africa International Conference on Clean Energy and Energy
                Storage (AICCEES){" "}
              </p>
            </Link>
          </motion.div>

          {/* <div className="mb-4">
            <Link href="/tovero">
              <p onClick={closeNav}>Tovero Sustainable Talk (TSET) </p>
            </Link>
          </div> */}
        </div>
      </div>
      <motion.div
        whileTap={{ backgroundColor: "#F1F2F3" }}
        className="mb-8"
      >
        <Link href="/publications">
          <p onClick={closeNav}>Publications</p>
        </Link>
      </motion.div>

      {/* <Link href="/solutions" className="mb-8">
        <p onClick={closeNav}>Solutions</p>
      </Link> */}
      <br />

      <Link onClick={closeNav} href="/contact-us">
        <CustomButton variant="secondary">CONTACT US</CustomButton>
      </Link>
    </div>
  );
}

export default MobileNavBar;
