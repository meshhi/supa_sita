import React, { useEffect, useState, createContext } from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";
import SlidesList from "./SlideList";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

export const SliderContext = createContext();

const Slider = ({ width, height, autoPlay, autoPlayTime }) => {
    const [items, setItems] = useState([{
        header: 'Мы помогаем организациям и предприятиям решить вопрос с энергоснабжением',
        description: '',
        imagePath: 'img_1.jpg',
    }, {
        header: 'От проекта до готового решения',
        description: '',
        imagePath: 'img_2.jpg',
    }, {
        header: 'Строим кабельные и воздушные линии, а также трансформаторные подстанции 0.4-10 кВ',
        description: '',
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
        <SliderContext.Provider
            value={{
                goToSlide,
                changeSlide,
                slidesCount: items.length,
                slideNumber: slide,
                items,
            }}
        >
            <div className="slider-container flex flex-row items-center gap-0.5">
                <ArrowLeft></ArrowLeft>
                <div
                    className='slider'
                    style={{ width, height }}
                >

                    <SlidesList />
                    <Dots />
                </div>
                <ArrowRight></ArrowRight>
            </div>
        </SliderContext.Provider>
    )
}

export default Slider;