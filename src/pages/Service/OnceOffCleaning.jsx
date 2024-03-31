import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';
import { onceOffCleaningData } from './data';

function OnceOffCleaning() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          once-off cleaning
        </h2>
      </div>

      {/* main content  */}
      <div className="flex flex-col gap-9">
        {onceOffCleaningData.map((item) => (
          <div className="flex flex-col gap-3" key={item.title}>
            {/* heading  */}
            <div className="font-bold text-xl">{item.title}</div>

            <p>{item.content}</p>
          </div>
        ))}
      </div>

      {/* contact form  */}
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}

export default OnceOffCleaning;
