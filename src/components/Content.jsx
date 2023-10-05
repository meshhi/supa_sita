import Slider from "./Slider/Slider";

const Content = () => {
return(
    <>
        <div clasName="slider-block">
            <div className="container flex justify-center items-center my-40">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <Slider autoPlay={true} autoPlayTime={3000}></Slider>
                </div>
            </div>
        </div>
        <div clasName="advantages-block">
            <div className="container w-full h-screen border-black border-2 rounded-md grid grid-rows-6 grid-flow-row ">
                <div className="row-span-1 flex justify-center items-center bg-black">
fa
                </div>
                <div className="row-span-9">
sdf
                </div>

            </div>
        </div>
    </>
)
}

export default Content;