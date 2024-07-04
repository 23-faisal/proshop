import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-slate-50 ">
      <h1 className="text-center">Proshop © {currentYear}</h1>
    </footer>
  );
};

export default Footer;
