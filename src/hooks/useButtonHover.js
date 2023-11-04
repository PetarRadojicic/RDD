import { useState } from 'react';

const useButtonHover = () => {
  const [hoverStyle] = useState({
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      type: "spring",
    },
  });

  return hoverStyle;
};

export default useButtonHover;
