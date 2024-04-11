import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../Footer/data';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* for desktop  */}
      <nav className="bg-copy-grey fixed w-full top-0 py-1 px-12 font-poppins z-20 hidden lg:block">
        {/* relative div  */}
        <div className="flex">
          {/* left */}
          <div className="left w-[20%]">
            <div className="w-[70%]">
              <Link to={'/'}>
                <img
                  src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1708929682/cleaning%20genie/alhnad5jvfsyisyx7hh8.svg"
                  alt=""
                  className=""
                />
              </Link>
            </div>
          </div>
          {/* right  */}
          <div className="right w-[80%] flex justify-between items-center">
            <div className="items flex w-full gap-10">
              {/* item 1  */}
              <Link to={'/'}>
                <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-5 hover:bg-white p-5">
                  <div className="flex flex-col">
                    <span className="text-copy-green font-semibold text-lg">
                      Home
                    </span>
                    {/* <span className="text-[#9b9b9b] text-xs">
                  We're ready to help
                </span> */}
                  </div>
                  <div className="">
                    <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                  </div>
                </div>
              </Link>

              {/* item 2 */}
              <Link to={'/services'}>
                <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                  <div className="flex flex-col">
                    <span className="text-copy-green font-semibold text-lg">
                      Services
                    </span>
                    {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                  </div>
                  <div className="">
                    <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                  </div>
                </div>
              </Link>

              {/* item 3 */}
              <Link to={'/about-us'}>
                <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                  <div className="flex flex-col">
                    <span className="text-copy-green capitalize font-semibold text-lg">
                      About
                    </span>
                    {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                  </div>
                  <div className="">
                    <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                  </div>
                </div>
              </Link>

              {/* item 4  */}
              <Link to={'/contact-us'}>
                <div className="item cursor-pointer border-l border-[#dad9d9] flex items-center gap-10 hover:bg-white p-5">
                  <div className="flex flex-col">
                    <span className="text-copy-green font-semibold text-lg">
                      Contact Us
                    </span>
                    {/* <span className="text-[#9b9b9b] text-xs">
                  We'll respond right away
                </span> */}
                  </div>
                  <div className="">
                    <i className="fa-solid fa-play fa-xs text-[#666666]"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* absolute div  */}
        <div className="upper flex absolute top-0 right-0 justify-end">
          <Link to={'/contact-us'}>
            <div className="contact bg-red-600 flex justify-center items-center text-white p-1 px-2 text-lg">
              Call 0433513336
            </div>
          </Link>
        </div>
      </nav>

      {/* for mobile  */}
      <div className="relative w-full py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709314275/cleaning%20genie/tmgtl8ztpi0nf4j2owby.svg"
                alt=""
                className="w-10"
              />
            </span>
            <span className="font-bold">Clean Genie</span>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img
                          src="https://res.cloudinary.com/remind-cents-cloud/image/upload/v1709314275/cleaning%20genie/tmgtl8ztpi0nf4j2owby.svg"
                          alt=""
                          className="w-10"
                        />
                      </span>
                      <span className="font-bold">Clean Genie</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.slug}
                          onClick={toggleMenu}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900 capitalize">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Link to={'/contact-us'}>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-copy-green text-white"
                    >
                      Call 0433513336
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
