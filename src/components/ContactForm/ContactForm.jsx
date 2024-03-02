import React from 'react';

function ContactForm() {
  return (
    <div className="quote mt-3 lg:pt-10 mb-1">
      <h2 className="text-center text-lg flex gap-2 justify-center w-full flex-col lg:flex-row">
        <span className="font-bold">Request a quote.</span>
        <span>Your local franchise will call you.</span>
      </h2>
      <div className=" bg-copy-grey my-4 mx-auto p-8 pt-10">
        <form
          action=""
          method="post"
          className="flex justify-center flex-col gap-3 lg:gap-5 w-full  items-center"
        >
          {/* col-1  */}
          <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-0 justify-around">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="capitalize focus:outline-none  lg:w-[45%] p-3 border border-[#8b8a8a]"
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Mobile Number"
              className="lg:w-[45%] focus:outline-none  p-3 border border-[#8b8a8a]"
            />
          </div>

          {/* col-2  */}
          <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-0 justify-around">
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Postcode"
              className="capitalize lg:w-[45%] p-3 focus:outline-none border border-[#8b8a8a]"
            />
            <select
              name="cleaning_service"
              className="lg:w-[45%] p-3 focus:outline-none border border-[#8b8a8a]"
            >
              <option value="domestic cleaning">domestic cleaning</option>
              <option value="commercial cleaning">commercial cleaning</option>
              <option value="End of lease cleaning">
                End of lease cleaning
              </option>
              <option value="spring cleaning">spring cleaning</option>
              <option value="once off cleaning">once off cleaning</option>
              <option value="steam carpet cleaning">
                steam carpet cleaning
              </option>
              <option value="pressure washing">pressure washing</option>
              <option value="tile and grout cleaning">
                tile and grout cleaning
              </option>
              <option value="windows cleaning">windows cleaning</option>
              <option value="industrial cleaning">industrial cleaning</option>
            </select>
          </div>

          {/* col-3  */}
          <div className="w-full flex justify-end lg:pr-5">
            <button
              type="submit"
              className="capitalize bg-copy-green text-white px-3 py-2 rounded-sm"
            >
              submit now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
