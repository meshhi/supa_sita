import React, { useEffect, useState, createContext } from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";
import SlidesList from "./SlideList";

export const SliderContext = createContext();

const Slider = ({ width, height, autoPlay, autoPlayTime }) => {
    const [items, setItems] = useState([{
        header: 'some',
        description: 'some description',
        imagePath: 'img_1.jpg',
    },{
        header: 'some2',
        description: 'some description2',
        imagePath: 'img_2.jpg',
    }]); // данные для слайдера
    const [slide, setSlide] = useState(0); // текущий номер слайдера

    useEffect(() => {
        //   const loadData = async () => {
        //     const images = await getImages();
        //     setItems(images);
        //   };
        //   loadData();
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div
            className='slider'
            style={{ width, height }}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <Arrows />
                <SlidesList />
                <Dots />
            </SliderContext.Provider>
        </div>
    )
}

export default Slider;