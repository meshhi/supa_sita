import Montage from "./CarouselItems/Montage"
import Abour from "./CarouselItems/Abour"
import { useEffect } from "react"
import { useState } from "react"

const Carousel = () => {
    const childs = [Montage, Abour]
    const [child, setChild] = useState(Montage);
    const [currChildCount, setCurrChildCount] = useState(0);
    useEffect(() => {
        // setTimeout(() => {
        //     setCurrChildCount(prev => Number(!prev));
        //     setChild(childs[currChildCount]);
        // }, 3000)
    })


    return (
        <div className='carousel'>
            {child}
        </div>
    )
}

export default Carousel