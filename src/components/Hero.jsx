import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.svg";
import animatedIcon1 from "../assets/animated-icon-1.png";
import animatedIcon2 from "../assets/animated-icon-2.png";
import animatedIcon3 from "../assets/animated-icon-3.png";
import animatedIcon4 from "../assets/animated-icon-4.png";
import { useState } from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";

import comIcon from "../assets/com-w.png";
import netIcon from "../assets/net-w.png";
import orgIcon from "../assets/org-w.png";
import storeIcon from "../assets/store-w.png";
import onlineIcon from "../assets/online-w.png";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="bg-ddnsBlue">
      <div className="px-4 lg:px-20 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel
          leftControl=" "
          rightControl=" "
          indicators=""
          className="w-full mx-auto"
        >
          <div className="my-28 md:my-0 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="relative">
              <img src={banner1} alt="" />
              <img
                src={animatedIcon1}
                alt=""
                className="absolute left-[15%] top-[30%] animate-bounce-1"
              />
              <img
                src={animatedIcon2}
                alt=""
                className="absolute right-[45%] top-0 animate-bounce-2"
              />
              <img
                src={animatedIcon3}
                alt=""
                className="absolute left-[75%] top-[30%] animate-bounce-3"
              />
              <img
                src={animatedIcon4}
                alt=""
                className="absolute right-[45%] top-[60%] animate-bounce-4"
              />
            </div>
            {/* carousel text */}
            <div className="md:w-1/2">
              <div className="flex flex-wrap text-xl text-green-400">
                <div className="w-full md:w-1/2 flex gap-4">
                  <BsFillCheckCircleFill />
                  <h5 className="text-xl mb-4 text-white md:w-3/4 leading-5 flex items-center">
                    100% Australian
                  </h5>
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <BsFillCheckCircleFill />
                  <h5 className="text-xl mb-4 text-white md:w-3/4 leading-5 flex items-center">
                    Established 1999
                  </h5>
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <BsFillCheckCircleFill />
                  <h5 className="text-xl mb-4 text-white md:w-3/4 leading-5 flex items-center">
                    Local Support
                  </h5>
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <BsFillCheckCircleFill />
                  <h5 className="text-xl mb-4 text-white md:w-3/4 leading-5 flex items-center">
                    Family Owned
                  </h5>
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <BsFillCheckCircleFill />
                  <h5 className="text-xl mb-4 text-white md:w-3/4 leading-5 flex items-center">
                    ISO27001
                  </h5>
                </div>
              </div>

              <div>
                <h1 className="text-white text-4xl font-semibold mt-6">
                  Search for your domain:
                </h1>
              </div>

              {/* Search Bar */}
              <div className="flex items-center mt-6 ">
                <input
                  type="text"
                  placeholder="Enter your domain name"
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="w-full h-12 px-4 rounded-l"
                />
                <button className="bg-ddnsLightBlue h-12 px-8 rounded-r text-white border border-ddnsExtraLightBlue border-l-0 hover:bg-ddnsExtraLightBlue transition-all duration-500">
                  Search
                </button>
              </div>

              <div className="flex items-center mt-6 gap-6">
                <img src={comIcon} alt="" className="h-3" />
                <img src={netIcon} alt="" className="h-3" />
                <img src={orgIcon} alt="" className="h-3" />
                <img src={storeIcon} alt="" className="h-3" />
                <img src={onlineIcon} alt="" className="h-3" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
