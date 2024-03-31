import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';
import { springCleaningData, springServiceBenefits } from './data';

function SpringCleaning() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          spring cleaning
        </h2>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <p>
            Spring is the perfect time to rejuvenate your home or office space
            with a thorough and refreshing cleaning session. At Clean Genie
            Service, we understand the importance of a clean and organized
            environment, especially after the long winter months.
          </p>
          <p>
            Our dedicated team of cleaning professionals is here to help you
            tackle every nook and cranny, leaving your space sparkling clean and
            revitalized.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* heading  */}
          <div className="font-bold text-xl">
            Why choose our spring cleaning ?
          </div>

          <div className="">
            <dl className="flex flex-col gap-3">
              {springCleaningData.map((item) => (
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
            Our Spring Cleaning Services Include
          </div>

          {/* content  */}
          <div className="flex flex-col gap-2">
            {springServiceBenefits.map((item, index) => (
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

export default SpringCleaning;
