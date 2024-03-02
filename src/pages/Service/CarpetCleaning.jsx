import React from 'react';
import { carpetCPoints } from './data';
import { ContactForm, ScrollToTop } from '../../components';

function CarpetCleaning() {
  return (
    <div className="flex flex-col gap-5">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Carpet Cleaning Services
        </h2>
      </div>

      {/* content  */}
      <div className="content flex flex-col lg:flex-row gap-7 lg:gap-0">
        {/* left */}
        <div className="left lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709192206/cleaning%20genie/aysrpryukwmfrn6lwakd.jpg"
            alt=""
          />
        </div>
        {/* right  */}
        <div className="right lg:w-[50%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">How hygienic is your home?</div>
            <div className="flex flex-col gap-2">
              <p>
                Regular vacuuming and cleaning only does so much. In fact,
                carpets contain around 200,000 bacteria per square inch and a
                person sheds around 1.5 million skin flakes an hour!
              </p>
              <p>
                Our fully trained technicians use tried-and-tested treatments
                and equipment to sanitise and safeguard your home, your
                furnishings and your family.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">Why choose V.I.P.?</div>
            <div className="">
              <ul className="flex flex-col gap-2">
                {carpetCPoints.map((item, index) => (
                  <li className="flex gap-3" key={index}>
                    <span>
                      <i className="fa-solid text-copy-green fa-check"></i>
                    </span>
                    <span className="capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <div className="mt-10 lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}

export default CarpetCleaning;
