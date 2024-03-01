import React from 'react';
import { WindowsCPoints } from './data';
import { ContactForm, ScrollToTop } from '../../components';

function WindowCleaning() {
  return (
    <div className="flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Window Cleaning Service
        </h2>
      </div>

      {/* content  */}
      <div className=" flex gap-3">
        {/* left  */}
        <div className="left lg:w-[50%] flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">No Streaks, no fuss!</div>
            <div className="flex flex-col gap-3">
              <p>
                Are your windows, fly screens, window panes, window frames or
                security grills in need of a regular or once off clean?
              </p>
              <p>
                Whether it is window cleaning at home or at your business,
                V.I.P. can take care of your window cleaning needs.
              </p>
            </div>
          </div>

          <div className="">
            <p>V.I.P. Window Cleaning franchisees can provide:</p>
            <div className="pt-5">
              <ul className="flex flex-col gap-2">
                {WindowsCPoints.map((item, index) => (
                  <li className="flex gap-2 capitalize" key={index}>
                    <span>
                      <i className="fa-solid text-copy-green fa-star-of-life"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="right lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709191631/cleaning%20genie/tuvxkbvqipsywimjkeao.jpg"
            alt=""
          />
        </div>
      </div>

      {/* conatct form  */}
      <ContactForm />
    </div>
  );
}

export default WindowCleaning;
