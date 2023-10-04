import Carousel from "./Carousel";

const Content = () => {
return(
    <>
        <div clasName="start_carousel">
            <div className="container flex justify-center items-center my-40">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
        <div clasName="advantages">
            <div className="container w-full h-screen border-black border-2 rounded-md grid grid-rows-6 grid-flow-row ">
                <div className="row-span-1 flex justify-center items-center bg-black" onClick={() => {
                    document.querySelector('.body')
                }}>
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