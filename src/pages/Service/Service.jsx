import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { sideBarData } from './data';

function Service() {
  return (
    <div className="font-poppins px-12 py-20">
      {/* spacer  */}
      <div className="mt-[9rem]"></div>

      {/* hero section  */}
      <div className="flex justify-between">
        {/* side bar  */}
        <div className="side-bar h-[80vh] w-[20%] bg-[#154734] text-white py-3 px-5 rounded-md">
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
        <div className="w-[75%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Service;
