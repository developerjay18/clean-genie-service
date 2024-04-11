import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { services } from './data';
import { ContactForm, ScrollToTop } from '../../components';

function Home() {
  return (
    <div className="max-w-screen overflow-hidden font-poppins">
      <ScrollToTop />
      {/* spacer  */}
      <div className="lg:mt-[2rem]"></div>

      {/* hero section  */}
      <div className="background-container">
        <div className="z-10 absolute flex justify-center items-center text-white w-full h-full px-3 lg:px-12 flex-col gap-16">
          <div className="title text-center font-semibold">
            <h1 className="text-5xl lg:text-7xl leading-[4rem] lg:leading-[5.4rem]">
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
            <Link to={'/contact-us'}>
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
      <div className="service px-3 lg:px-12 py-20 flex justify-center flex-wrap gap-5 lg:gap-3">
        {services.map((item, index) => (
          <div className="item lg:w-[24%] lg:h-[40vh]" key={index}>
            {/* upper  */}
            <div className="upper md:h-[30vh] lg:h-[33vh] overflow-hidden">
              <img
                src={item.imgUrl}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            {/* lower */}
            <div className="lower h-[7vh] bg-copy-green text-white flex justify-center items-center capitalize">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* request a quote section */}
      <div className="quote lg:pt-10 pb-20 px-3 lg:px-12 mb-1">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
