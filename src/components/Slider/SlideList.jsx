import React, { useContext } from "react";
import SlideItem from "./SlideItem";
import { SliderContext } from "./Slider";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <SlideItem key={index} data={slide} />
      ))}
    </div>
  );
}