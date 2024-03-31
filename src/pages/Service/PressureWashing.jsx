import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';
import { pressureWashingData, pressureWashingPoints } from './data';

function PressureWashing() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Pressure Washing
        </h2>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <p>
            Enhance the curb appeal and cleanliness of your property with the
            power of pressure washing. At Clean Genie Services, we specialize in
            providing high-quality pressure washing services to rejuvenate and
            restore various exterior surfaces.
          </p>
          <p>
            From driveways and sidewalks to decks and siding, our professional
            team has the expertise and equipment to tackle even the toughest
            grime and stains.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* heading  */}
          <div className="font-bold text-xl">
            Why Choose Our Pressure Washing Services?
          </div>

          <div className="">
            <dl className="flex flex-col gap-3">
              {pressureWashingData.map((item) => (
                <div className="flex flex-col gap-2 ml-2" key={item.title}>
                  <dt className="font-bold text-lg flex gap-2">
                    <span>
                      <i className="fa-solid text-copy-green fa-star-of-life"></i>
                    </span>
                    <span>{item.title}</span>
                  </dt>
                  <dd className="ml-6 flex gap-3">
                    <span>
                      <p>{item.content}</p>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* heading  */}
          <div className="font-bold text-xl">
            Our Pressure Washing Services Include
          </div>

          {/* content  */}
          <div className="flex flex-col gap-2">
            {pressureWashingPoints.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <span>
                  <i className="fa-solid text-copy-green fa-check"></i>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* contact form  */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressureWashing;
