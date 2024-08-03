import React, { useEffect, useState } from "react";

const CardAnima = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Scroll Down to See the Animation</h1>
      </div>
      <div
        className={`cards-container flex flex-wrap justify-center transition-all duration-700 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <Card title="Manage money better" />
        <Card title="Change job or career" />
        <Card title="Eliminate money stress" />
        <Card title="Go on a dream vacation" />
        <Card title="Buy the perfect home" />
        <Card title="Plan for family" />
      </div>
      <div className="h-screen flex items-center justify-center"></div>
    </div>
  );
};

const Card = ({ title }) => (
  <div className="card bg-gray-200 flex items-center justify-center w-44 h-56 p-6 rounded-lg shadow-lg">
    <p>{title}</p>
  </div>
);

export default CardAnima;
