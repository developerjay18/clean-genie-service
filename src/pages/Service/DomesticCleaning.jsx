import React from 'react';
import { houseCleaningPoints, housecleaningData } from './data';
import { ContactForm, ScrollToTop } from '../../components';

function DomesticCleaning() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          domestic cleaning
        </h2>
      </div>

      <div className="flex flex-col gap-9">
        {/* content  */}
        <div className="content">
          <p>
            Imagine never having to clean your home again. Ever. It's what many
            of us dream about and Clean Genie can help you make it a reality.
            Imagine all the time you would save — time that you could then spend
            doing the things you enjoy.
          </p>
        </div>

        {/* FAQS  */}
        <div className="faqs flex flex-col gap-9">
          {housecleaningData.map((item, index) => (
            <p className="flex flex-col gap-1" key={index}>
              <span className="font-bold text-lg">{item.title}</span>
              <span>{item.content}</span>
            </p>
          ))}
        </div>

        {/* points  */}
        <div className="points">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg">
              Tailored house cleaning packages
            </div>
            <div className="flex flex-col gap-2">
              <div className="">
                We can tailor a package to suit you, your needs and your budget.
                You can choose from:
              </div>
              <div className="">
                <ul className="flex flex-col gap-2">
                  {houseCleaningPoints.map((item, index) => (
                    <li className="flex gap-3" key={index}>
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
        </div>

        {/* form  */}
        <ContactForm />
      </div>
    </div>
  );
}

export default DomesticCleaning;
