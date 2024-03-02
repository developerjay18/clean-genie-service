import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';

function Contact() {
  return (
    <div className="font-poppins px-5 lg:px-12 py-5 lg:py-20">
      <ScrollToTop />
      {/* spacer  */}
      <div className="lg:mt-[2rem]"></div>
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          Contact US
        </h2>
      </div>

      {/* content and form  */}
      <div className="flex flex-col lg:flex-row lg:mt-10 justify-center items-center gap-8 lg:gap-0">
        <div className="left lg:w-[50%] pt-5 lg:pt-14 flex gap-8">
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
