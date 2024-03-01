import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-copy-grey fixed w-full top-0 py-5 px-12 font-poppins z-20">
      {/* relative div  */}
      <div className="flex">
        {/* left */}
        <div className="left w-[20%]">
          <div className="w-[70%]">
            <Link to={'/'}>
              <img
                src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708929682/cleaning%20genie/alhnad5jvfsyisyx7hh8.svg"
                alt=""
                className=""
              />
            </Link>
          </div>
        </div>
        {/* right  */}
        <div className="right w-[80%] flex justify-between items-center">
          <div className="items flex w-full gap-10">
            {/* item 1  */}
            <Link to={'/'}>
              <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-5 hover:bg-white p-5">
                <div className="flex flex-col">
                  <span className="text-copy-green font-semibold text-lg">
                    Home
                  </span>
                  {/* <span className="text-[#9b9b9b] text-xs">
                  We're ready to help
                </span> */}
                </div>
                <div className="">
                  <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                </div>
              </div>
            </Link>

            {/* item 2 */}
            <Link to={'/services'}>
              <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                <div className="flex flex-col">
                  <span className="text-copy-green font-semibold text-lg">
                    Services
                  </span>
                  {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                </div>
                <div className="">
                  <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                </div>
              </div>
            </Link>

            {/* item 3 */}
            <Link to={'/about-us'}>
              <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                <div className="flex flex-col">
                  <span className="text-copy-green capitalize font-semibold text-lg">
                    About
                  </span>
                  {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                </div>
                <div className="">
                  <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                </div>
              </div>
            </Link>

            {/* item 4  */}
            <Link to={'/contact-us'}>
              <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                <div className="flex flex-col">
                  <span className="text-copy-green font-semibold text-lg">
                    Contact Us
                  </span>
                  {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                </div>
                <div className="">
                  <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* absolute div  */}
      <div className="upper flex absolute top-0 right-0 justify-end">
        <Link to={'/'}>
          <div className="contact bg-red-600 flex justify-center items-center text-white p-1 px-2 text-lg">
            Call 0433513336
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
