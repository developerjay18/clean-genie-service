import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

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
      <div className="service px-12 py-20">
        <div className="item w-[24%] h-[40vh] bg-pink-300">
          {/* upper  */}
          <div className="upper h-[33vh] overflow-hidden">
            <img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708968342/cleaning%20genie/vmyca4ysbogren635bap.jpg"
              alt=""
            />
          </div>
          {/* lower */}
          <div className="lower h-[7vh] bg-copy-green text-white flex justify-center items-center">
            title
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
