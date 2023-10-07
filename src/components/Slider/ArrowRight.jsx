import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function ArrowRight() {
  const { changeSlide } = useContext(SliderContext);

  return (
      <div className="arrow right" onClick={() => changeSlide(1)} />
  );
}