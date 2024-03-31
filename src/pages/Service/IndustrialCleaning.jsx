import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';
import { industrialData, industrialPoints } from './data';

function IndustrialCleaning() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Industrial cleaning
        </h2>
      </div>

      {/* main content  */}
      <div className="flex flex-col gap-9">
        {industrialData.map((item) => (
          <div className="flex flex-col gap-3" key={item.title}>
            {/* heading  */}
            <div className="font-bold text-xl">{item.title}</div>

            <p>{item.content}</p>
          </div>
        ))}

        <div className="">
          {/* heading  */}
          <div className="font-bold text-xl">
            Why Choose Clean Genie Service?
          </div>

          <div className="mt-5">
            <dl className="flex flex-col gap-3">
              {industrialPoints.map((item) => (
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
      </div>

      {/* contact form  */}
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}

export default IndustrialCleaning;
