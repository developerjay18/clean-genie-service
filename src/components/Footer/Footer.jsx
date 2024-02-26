import React from 'react';
import { Link } from 'react-router-dom';
import { cleaningServices, navItems } from './data';

function Footer() {
  return (
    <footer className="mt-28 pt-10 px-12 bg-copy-grey flex flex-col gap-10 font-poppins">
      {/* upper  */}
      <div className="upper flex gap-10">
        {/* left  */}
        <div className="left w-[20%] flex flex-col gap-4">
          {/* l-up */}
          <div className="w-[80%]">
            <img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708929682/cleaning%20genie/alhnad5jvfsyisyx7hh8.svg"
              alt=""
            />
          </div>
          {/* l-down */}
          <div className="">
            <div className="icons flex gap-5">
              <Link to={''}>
                <div className="icon">
                  <i className="fa-brands fa-lg bg-copy-green px-[15px] py-5 rounded-full fa-facebook-f text-white"></i>
                </div>
              </Link>
              <Link to={'/'}>
                <div className="icon">
                  <i className="fa-brands fa-lg bg-copy-green px-3 py-5 rounded-full fa-instagram text-white"></i>
                </div>
              </Link>
              <Link to={'/'}>
                <div className="icon">
                  <i className="fa-brands fa-lg bg-copy-green px-2 py-5 rounded-full fa-youtube text-white"></i>
                </div>
              </Link>
              <Link to={'/'}>
                <div className="icon">
                  <i className="fa-brands fa-lg bg-copy-green px-3 py-5 rounded-full fa-linkedin-in text-white"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="right w-[80%]">
          <div className="item-list flex gap-24">
            {/* col-1  */}
            <div className="item">
              <h3 className="text-lg uppercase text-[#474747] font-semibold">
                services
              </h3>
              <div className="">
                <ul className="text-[#6b6b6b] pt-2 flex flex-col gap-1">
                  {cleaningServices.map((item, index) => (
                    <Link to={item.slug} key={index} className="flex">
                      <li className="hover:text-[#2e2e2e] capitalize">
                        {item.service}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* col-2  */}
            <div className="item">
              <h3 className="text-lg uppercase text-[#474747] font-semibold">
                quick links
              </h3>
              <div className="">
                <ul className="text-[#6b6b6b] pt-2 flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <Link to={item.slug} key={index} className="flex">
                      <li className="hover:text-[#2e2e2e] capitalize">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            {/* col-3  */}
            <div className="item">
              <h3 className="text-lg uppercase text-[#474747] font-semibold">
                contact info
              </h3>
              <div className="flex flex-col gap-3 pt-2 text-[#6b6b6b]">
                <div className="">google maps integration</div>
                <div className="flex gap-3 capitalize">
                  <span>
                    <i className="fa-solid px-3 py-2 rounded-full text-white bg-copy-green fa-location-dot"></i>
                  </span>
                  <span>address is here...</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <span>
                      <i className="fa-solid fa-phone text-white bg-copy-green p-2 rounded-full"></i>
                    </span>
                    <span>0433513336</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>
                      <i className="fa-solid fa-phone text-white bg-copy-green p-2 rounded-full"></i>
                    </span>
                    <span>0433913336</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower  */}
      <div className="lower pt-10 border-t pb-2 flex justify-between text-[#6b6b6b]">
        <div className="left">&copy; Copyright All Rights Reserved 2024</div>
        <div className="right">
          Developed by{' '}
          <Link
            to={'https://www.jayraiweb.com'}
            className="hover:text-copy-green"
          >
            Jay Rai Web
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
