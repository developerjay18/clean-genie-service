import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';
import { tileAndGroutData, tileAndGroutPoints } from './data';

function TileAndGrout() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Tile And grout cleaning
        </h2>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <p>
            Over time, dirt, grime, and stains can accumulate on your tile and
            grout surfaces, leaving them looking dull and discolored. At Clean
            Genie Service, we specialize in providing professional tile and
            grout cleaning services to rejuvenate and revitalize your floors.
          </p>
          <p>
            With our advanced cleaning techniques and specialized equipment,
            we&apos;ll remove dirt, stains, and bacteria, leaving your tile and
            grout looking like new.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* heading  */}
          <div className="font-bold text-xl">
            Why Choose Our Tile and Grout Cleaning Services?
          </div>

          <div className="">
            <dl className="flex flex-col gap-3">
              {tileAndGroutData.map((item) => (
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
            Our Tile and Grout Cleaning Process Includes
          </div>

          {/* content  */}
          <div className="flex flex-col gap-2">
            {tileAndGroutPoints.map((item, index) => (
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

export default TileAndGrout;
