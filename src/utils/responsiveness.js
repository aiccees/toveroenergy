"use client";

import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial width
      setWidth(window.innerWidth);

      // Handler to call on window resize
      const handleResize = () => setWidth(window.innerWidth);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
};
