import React from "react";
import { useMediaQuery } from "react-responsive";

import heroImage from "../Assets/HeroImage.jpg";
import heroImageMobile from "../Assets/Hero Image (Tablet and Mobile).jpg";

const ResponsiveImage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      {isDesktopOrLaptop && <img src={heroImage} alt='img'/>}
      {isBigScreen && <img src={heroImage} alt='img'/>}
      {isTabletOrMobile && <img src={heroImageMobile} alt='img'/>}
    </>
  );
};

export default ResponsiveImage;
