import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';

function Contact() {
  return (
    <div className="font-poppins px-12 py-20">
      <ScrollToTop />
      {/* spacer  */}
      <div className="mt-[9rem]"></div>
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Contact US
        </h2>
      </div>

      {/* content and form  */}
      <div className="flex mt-10 justify-center items-center">
        <div className="left lg:w-[50%] pt-14 flex flex-col gap-8">
          <div className="lg:w-[90%]">
            <img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709005431/cleaning%20genie/yluxrgaefgzbrpa9avnq.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right lg:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
