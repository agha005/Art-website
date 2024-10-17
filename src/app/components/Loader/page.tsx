"use client"; // Mark this as a client component

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      id="loader"
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
    >
      {/* Waving Text */}
      <h1 className="loader-text text-[2vw] font-bold text-orange-500 tracking-widest mb-8">
        {Array.from("TECH TONIC SOLUTIONS").map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-wave"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      {/* Circular Spinner */}
      <div className="spinner w-16 h-16 border-4 border-t-4 border-t-orange-500 border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
