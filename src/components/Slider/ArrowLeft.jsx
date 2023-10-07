import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function ArrowLeft() {
  const { changeSlide } = useContext(SliderContext);

  return (
      <div className="arrow left" onClick={() => changeSlide(-1)} />
  );
}