import React from 'react'
import { useMediaQuery } from "react-responsive";
import one from '../Assets/CampImages/HighQualityImages/Mount Ulap.png';


const ResponsiveCardImages = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    return (
      <>
        {isDesktopOrLaptop && <img src={one} alt='img'/>}
        {isBigScreen && <img src={one} alt='img'/>}
        {isTabletOrMobile && <img src={one} alt='img'/>}
      </>
    );
  };

export default ResponsiveCardImages