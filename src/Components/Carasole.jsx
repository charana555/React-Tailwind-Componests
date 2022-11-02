import { useState, useRef, useEffect } from "react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const images = [
  "/assets/person-3.jpg",
  "/assets/person-1.jpg",
  "/assets/person-2.jpg",
];

let count = 0;

const Carasole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.addEventListener("animationend", () => {
      sliderRef.current.classList.remove("fade-anim");
    });
  }, []);

  const sliderRef = useRef();

  const handelnext = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    sliderRef.current.classList.add("fade-anim");
  };

  const handelprevious = () => {
    const imageLength = images.length;
    count = (currentIndex + imageLength - 1) % imageLength;
    setCurrentIndex(count);
    sliderRef.current.classList.add("fade-anim");
  };

  return (
    <section className="w-screen h-screen bg-blue-300 flex justify-center items-center ">
      <div ref={sliderRef} className="w-[60%] h-[70%] select-none relative ">
        <div className="aspect-w-16 aspect-h-9 ">
          <img src={images[currentIndex]} alt="" />
        </div>

        <div className=" absolute w-full top-1/2 transform -translate-y-1/2 flex items-center justify-between">
          <GrPrevious
            className=" bg-white text-4xl p-2 bg-opacity-10 cursor-pointer hover:bg-opacity-40 mx-2 rounded-full"
            onClick={handelprevious}
          />
          <GrNext
            className=" bg-white text-4xl p-2 bg-opacity-10 cursor-pointer hover:bg-opacity-40 mx-2 rounded-full"
            onClick={handelnext}
          />
        </div>
      </div>
    </section>
  );
};

export default Carasole;
