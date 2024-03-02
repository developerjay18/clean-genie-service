import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { sideBarData } from './data';
import { ScrollToTop } from '../../components';

function Service() {
  return (
    <div className="font-poppins px-5 lg:px-12 py-5 lg:py-20">
      <ScrollToTop />
      {/* spacer  */}
      <div className="lg:mt-[2rem]"></div>

      {/* hero section  */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
        {/* side bar  */}
        <div className="side-bar lg:h-[80vh] lg:w-[20%] bg-[#154734] text-white py-3 px-5 rounded-md">
          <ul className="flex flex-col gap-2 py-3">
            {sideBarData.map((item, index) => (
              <Link to={item.slug} key={index}>
                <li className="border-b border-copy-grey pb-2 capitalize hover:text-[#e0dfdf]">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* bar info displayer  */}
        <div className="lg:w-[75%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Service;
