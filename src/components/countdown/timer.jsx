"use client";

import { useEffect, useState } from "react";

function CountdownTimer() {
  const isBrowser = typeof window !== "undefined";

  const getTargetTime = () => {
    if (!isBrowser) {
      return new Date().getTime() + 175 * 24 * 60 * 60 * 1000;
    }
    // Check if the target time is stored in localStorage
    const savedTargetTime = localStorage.getItem("targetTime");
    if (savedTargetTime) {
      return new Date(savedTargetTime).getTime();
    } else {
      // If not, calculate the target time as 175 days from now and save it
      const targetTime = new Date().getTime() + 175 * 24 * 60 * 60 * 1000;
      localStorage.setItem("targetTime", new Date(targetTime).toISOString());
      return targetTime;
    }
  };

  const calculateTimeLeft = (targetTime) => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  // Initialize state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isBrowser) {
      // If not in the browser, do not set up the interval
      return;
    }

    const targetTime = getTargetTime();
    setTimeLeft(calculateTimeLeft(targetTime));

    // Update the countdown every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isBrowser]);

  return (
    <div>
      <p className="text-sm font-bold text-prigreentext">
        {timeLeft.days} days: {timeLeft.hours} hours: {timeLeft.minutes}{" "}
        minutes: {timeLeft.seconds} seconds
      </p>
    </div>
  );
}

export default CountdownTimer;
