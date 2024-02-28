import React from 'react';
import { Link } from 'react-router-dom';
import { commCleanPoints, commercialCleaningCards } from './data';
import { ContactForm } from '../../components';

function CommercialCleaning() {
  return (
    <div className="w-[80%] flex flex-col gap-3">
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3 text-center">
          At Clean Genie Commercial Cleaning, we’re on your team
        </h2>
      </div>

      {/* content  */}
      <div className="content flex flex-col gap-5 pt-5 text-center">
        <div className="font-bold text-lg">Is your business really clean?</div>
        <div className="flex flex-col gap-3">
          <p>
            Did you know that a neat, clean and sanitised workplace keeps staff
            more motivated and productive? It also helps make the best possible
            impression on visitors and customers, which is essential in today’s
            competitive business environment.
          </p>
          <p>
            But it’s not always easy to keep your business clean. That’s why at
            V.I.P. Commercial Cleaning, we’re on your team.
          </p>

          <Link>
            <button className="capitalize bg-copy-green text-white px-5 rounded-sm py-2 font-semibold">
              Book today
            </button>
          </Link>
        </div>

        <div className="border-t border-b py-5 flex flex-col gap-5">
          <div className="font-bold text-lg">
            Your business is in safe hands
          </div>
          <div className="flex flex-col gap-3">
            <p>
              We understand the challenges property managers and business owners
              face in keeping their workplace clean – especially if you’ve been
              let down by an unreliable commercial cleaning company in Christmas
              Island before. You need quality cleaning done consistently by
              trained, proactive professionals you can trust.
            </p>
            <p>That’s V.I.P. Commercial Cleaning!</p>
            <p>
              Whether it’s your office, warehouse, medical centre, school,
              childcare centre or another setting, your local V.I.P. Commercial
              Cleaning franchisee is ready to get to work.
            </p>
            <p>
              We’ve been around for over 40 years and supporting businesses in
              Australia for over two decades. So you can be confident we’ll
              always deliver the best results for your workplace.
            </p>
          </div>
        </div>

        <div className="border-t border-b py-5 flex flex-col gap-5">
          <div className="font-bold text-lg">
            Commercial cleaning Christmas Island
          </div>
          <div className="flex flex-col gap-3">
            <p>
              Your local V.I.P. Commercial Cleaning business provides a complete
              service – backed by our 100% satisfaction guarantee.
            </p>
            <div className="flex flex-wrap justify-between gap-y-6 py-6">
              {commercialCleaningCards.map((item, index) => (
                <div className="card w-[30%] flex flex-col gap-3" key={index}>
                  <div className="img">
                    <img src={item.imgUrl} alt="" className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-lg capitalize">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
            <Link>
              <button className="capitalize bg-copy-green text-white px-5 rounded-sm py-2 font-semibold">
                Book today
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-b py-5 flex flex-col gap-5">
          <div className="font-bold text-lg">
            Let us look after your business
          </div>

          <div className="flex flex-col gap-3">
            <p>
              Your premises deserve the V.I.P. treatment. Whatever your needs
              and budget, we can tailor a package to suit including:
            </p>
            <div className="">
              <ul className="inline-flex flex-col gap-2 py-4">
                {commCleanPoints.map((item, index) => (
                  <li key={index} className="flex gap-3 justify-start">
                    <span>
                      <i className="fa-solid text-copy-green fa-star-of-life"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link>
              <button className="capitalize bg-copy-green text-white px-5 rounded-sm py-2 font-semibold">
                Book today
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <ContactForm />
    </div>
  );
}

export default CommercialCleaning;
