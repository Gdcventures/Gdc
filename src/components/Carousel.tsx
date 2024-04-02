import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type CarouselProps = {
    slides: string[];
};

function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function showNextImage() {
        setCurrentIndex((index) => {
            if (index === slides.length - 1) return 0;
            return index + 1;
        });
    }

    function showPreviousImage() {
        setCurrentIndex((index) => {
            if (index === 0) return slides.length - 1;
            return index - 1;
        });
    }

    return (
        <div className="sm:w-[50%] mx-auto relative">
            <img
                src={slides[currentIndex]}
                alt="slide image"
                className="block"
            />
            <button
                type="button"
                aria-label="slide left arrow"
                className="block p-1  absolute top-0 left-0 bottom-0 cursor-pointer fill-black stroke-white hover:bg-black/10 transition-all ease-in-out"
                onClick={showPreviousImage}>
                <ArrowBigLeft
                    stroke="#1a1a1a"
                    opacity={0.5}
                    fill="white"
                    size="2rem"
                />
            </button>
            <button
                type="button"
                aria-label="slide right arrow"
                className="block p-1 absolute top-0 right-0 bottom-0 cursor-pointer hover:bg-black/10 transition-all ease-in-out"
                onClick={showNextImage}>
                <ArrowBigRight
                    stroke="#1a1a1a"
                    opacity={0.5}
                    fill="white"
                    size="2rem"
                />
            </button>
        </div>
    );
}

export default Carousel;
