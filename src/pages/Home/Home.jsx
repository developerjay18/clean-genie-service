import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { services } from './data';

function Home() {
  return (
    <div className="max-w-screen overflow-hidden font-poppins">
      {/* spacer  */}
      <div className="mt-[9rem]"></div>

      {/* hero section  */}
      <div className="background-container">
        <div className="z-10 absolute flex justify-center items-center text-white w-full h-full px-12 flex-col gap-16">
          <div className="title text-center font-semibold">
            <h1 className="text-7xl leading-[5.4rem]">
              <span>We&apos;re ready to help with your</span>
              <br />
              <span className="text-copy-green">
                <Typewriter
                  options={{
                    strings: [
                      'Domestic cleaning',
                      'Commercial cleaning',
                      'End of lease cleaning',
                      'Spring cleaning',
                      'Once off cleaning',
                      'Steam carpet cleaning',
                      'Pressure washing',
                      'Tile and grout cleaning',
                      'Windows cleaning',
                      'Industrial cleaning',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                    cursor: '|',
                    cursorClassName: 'text-Purple',
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="cta">
            <Link to={'/contact'}>
              <button className="text-xl bg-copy-green hover:bg-green-600 text-white px-8 py-3 rounded-md">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
        <div className="background-image"></div>
        <div className="background-overlay"></div>
      </div>

      {/* services section */}
      <div className="service px-12 py-20 flex justify-center flex-wrap gap-3">
        {services.map((item, index) => (
          <div className="item w-[24%] h-[40vh] bg-pink-300" key={index}>
            {/* upper  */}
            <div className="upper h-[33vh] overflow-hidden">
              <img src={item.imgUrl} alt="" />
            </div>
            {/* lower */}
            <div className="lower h-[7vh] bg-copy-green text-white flex justify-center items-center capitalize">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* request a quote section */}
      <div className="quote pt-10 pb-20 px-12 mb-1">
        <h2 className="text-center text-lg flex gap-2 justify-center w-full">
          <span className="font-bold">Request a quote.</span>
          <span>Your local franchise will call you.</span>
        </h2>
        <div className=" w-[70%] bg-copy-grey my-4 mx-auto p-8 pt-10">
          <form
            action=""
            method="post"
            className="flex justify-center flex-col gap-5 w-full  items-center"
          >
            {/* col-1  */}
            <div className="w-full flex justify-around">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="capitalize focus:outline-none  w-[45%] p-3 border border-[#8b8a8a]"
              />
              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Mobile Number"
                className="w-[45%] focus:outline-none  p-3 border border-[#8b8a8a]"
              />
            </div>

            {/* col-2  */}
            <div className="w-full flex justify-around">
              <input
                type="text"
                name="code"
                id="code"
                placeholder="Postcode"
                className="capitalize w-[45%] p-3 focus:outline-none border border-[#8b8a8a]"
              />
              <select
                name="cleaning_service"
                className="w-[45%] p-3 focus:outline-none border border-[#8b8a8a]"
              >
                <option value="domestic cleaning">domestic cleaning</option>
                <option value="commercial cleaning">commercial cleaning</option>
                <option value="End of lease cleaning">
                  End of lease cleaning
                </option>
                <option value="spring cleaning">spring cleaning</option>
                <option value="once off cleaning">once off cleaning</option>
                <option value="steam carpet cleaning">
                  steam carpet cleaning
                </option>
                <option value="pressure washing">pressure washing</option>
                <option value="tile and grout cleaning">
                  tile and grout cleaning
                </option>
                <option value="windows cleaning">windows cleaning</option>
                <option value="industrial cleaning">industrial cleaning</option>
              </select>
            </div>

            {/* col-3  */}
            <div className="w-full flex justify-end pr-5">
              <button
                type="submit"
                className="capitalize bg-copy-green text-white px-3 py-2 rounded-sm"
              >
                submit now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
