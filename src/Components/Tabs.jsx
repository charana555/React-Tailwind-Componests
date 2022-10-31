import { useState } from "react";

const Tabs = () => {
  const [tab, setTab] = useState(2);

  return (
    <section className=" w-screen h-screen bg-blue-200 flex justify-center p-28 ">
      <div className="  min-w-[80%] mx-auto ">
        {/* tab-navigation */}
        <div className=" flex justify-evenly items-center border-2 my-2 border-blue-600 ">
          <div
            onClick={() => setTab(1)}
            className={` font-semibold text-xl cursor-pointer  hover:text-gray-600 flex-1 text-center p-2  ${
              tab === 1 ? `bg-blue-600 text-white` : ``
            } `}
          >
            Home
          </div>
          <div
            onClick={() => setTab(2)}
            className={` font-semibold text-xl cursor-pointer  hover:text-gray-600 flex-1 text-center p-2  ${
              tab === 2 ? `bg-blue-600 text-white` : ``
            } `}
          >
            About
          </div>
          <div
            onClick={() => setTab(3)}
            className={` font-semibold text-xl cursor-pointer  hover:text-gray-600 flex-1 text-center p-2  ${
              tab === 3 ? `bg-blue-600 text-white` : ``
            } `}
          >
            Services
          </div>
          <div
            onClick={() => setTab(4)}
            className={` font-semibold text-xl cursor-pointer  hover:text-gray-600 flex-1 text-center p-2  ${
              tab === 4 ? `bg-blue-600 text-white` : ``
            } `}
          >
            Contact
          </div>
        </div>
        {/* tab-content  */}
        <div className=" relative h-full ">
          <div
            className={`absolute px-10 py-20 flex-col justify-center items-center bg-green-300  ${
              tab === 1 ? `flex` : `hidden`
            }`}
          >
            <h2 className="w-[970px] font-bold text-5xl text-center text-slate-900 font-sans ">
              HOME
            </h2>
          </div>
          <div
            className={`absolute px-10 py-20 flex-col justify-center items-center bg-orange-300 ${
              tab === 2 ? `flex` : `hidden`
            }`}
          >
            <h2 className="w-[970px] font-bold text-5xl text-center text-slate-900 font-sans ">
              ABOUT
            </h2>
          </div>
          <div
            className={`absolute px-10 py-20 flex-col justify-center items-center bg-red-300 ${
              tab === 3 ? `block` : `hidden`
            }`}
          >
            <h2 className="w-[970px] font-bold text-5xl text-center text-slate-900 font-sans ">
              SERVICES
            </h2>
          </div>
          <div
            className={`absolute px-10 py-20 flex-col justify-center items-center bg-purple-300 ${
              tab === 4 ? `block` : `hidden`
            }`}
          >
            <h2 className="w-[970px] font-bold text-5xl text-center text-slate-900 font-sans ">
              CONTACT
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
