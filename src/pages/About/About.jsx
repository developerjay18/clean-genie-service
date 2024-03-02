import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';

function About() {
  return (
    <div className="font-poppins px-5 lg:px-12 py-5 lg:py-20">
      <ScrollToTop />
      {/* spacer  */}
      <div className="lg:mt-[2rem]"></div>

      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          About Us
        </h2>
      </div>

      {/* content  */}
      <div className="content flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="left lg:w-[50%] flex flex-col gap-7 lg:pr-10">
            <div className="">
              <div className="font-bold text-lg">
                V.I.P. - the first home services franchise company
              </div>
              <p>
                V.I.P. was the very first home services franchise company in
                Australia and only the 3rd franchise company in the country.
                Established in 1979, it’s been going from strength to strength,
                has won multiple awards and today remains a proud family
                business.
              </p>
            </div>

            <div className="">
              <div className="font-bold text-lg">How V.I.P. started</div>
              <p>
                Back in the 1970s, Bill Vis, was selling vacuum cleaners door to
                door. However, with his keen eye for detail, he happened to
                notice that the lawn of the latest customer who didn’t want to
                buy a vacuum cleaner badly needed mowing. He asked the question,
                they said ‘yes’ and the rest is history. After lawn and garden
                care followed more home services and today, V.I.P. offer a whole
                suite of home services and have helped thousands of franchisees
                across Australia and in New Zealand get started with their own
                business.
              </p>
            </div>

            <div className="">
              <div className="font-bold text-lg">40 years strong</div>
              <p>
                As you can imagine, a lot has changed in 40 years, including
                lawnmowers, the size of people’s homes and gardens, technology,
                and perhaps most importantly, just how much time people want to
                spend doing it all themselves when it’s so easy to outsource to
                someone who’s been around for decades and whose name you trust.
              </p>
            </div>

            <div className="">
              <div className="font-bold text-lg">Proud family business</div>
              <p>
                Today, V.I.P. is still headed up by its founder, Bill Vis, three
                of his kids have joined the company and co-founder Rose Vis, is
                still involved with the business, so it really is one big happy
                family. Many of the staff at V.I.P. have been with the
                organisation for over 10 years and quite a few of the
                franchisees have clocked up 20+ years with the organisation. Now
                that’s saying something, especially these days!
              </p>
            </div>

            <div className="">
              <div className="font-bold text-lg">Going into the future</div>
              <p>
                At V.I.P. we’ll continue to embrace the latest technologies,
                continue to innovate, and remain committed to staying at the
                forefront of the home services industry. Our aim when we began,
                way back in 1979, was to offer the very best service and treat
                every single customer as a V.I.P. - and that is one thing that
                will never, ever change.
              </p>
            </div>
          </div>
          <div className="right lg:w-[50%]">
            <img
              src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709004505/cleaning%20genie/vsbqyqljesyvqhepl9ia.jpg"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* contact form  */}
      <div className=" mt-16">
        <ContactForm />
      </div>
    </div>
  );
}

export default About;
