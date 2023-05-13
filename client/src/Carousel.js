import {BsChevronCompactRight} from "react-icons/bs";
import {BsChevronCompactLeft} from "react-icons/bs";

import {useState} from "react";

const Carousel = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className="py-20">
            <div className="max-w-[700px] h-[600px] w-full m-auto py-16 px-4 relative ">
                <div id='carousel' style={{backgroundImage: `url(${slides[currentIndex].url})`}}
                     className="w-full h-full rounded-2xl bg-center bg-cover duration-500 scroll snap-x"></div>

                {/* Left Arrow */}
                <div
                    className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-gray-400/30 '>
                    <BsChevronCompactLeft onClick={prevSlide} size={50}/>
                </div>
                {/* Right Arrow */}
                <div
                    className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-gray-400/30 '>
                    <BsChevronCompactRight onClick={nextSlide} size={50}/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
