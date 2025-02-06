import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <section className="fixed w-full bg-white shadow z-50 py-2.5">
      <div className="container mx-auto">
        <div className=" font-poppins mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl text-primary font-Montez font-bold">
            Pritom
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-7">
            {["About", "Pricing", "Portfolio", "Blog", "Contact"].map(
              (item) => {
                const isActive = location.pathname.includes(item.toLowerCase());
                return (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`text-primary hover:text-secandari duration-200 text-base font-normal font-Poppins transition ${
                      isActive ? "text-secandari" : ""
                    }`}
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiAlignRight className="text-xl cursor-pointer" />
          </button>
        </div>

        {isOpen && (
          <div className="flex fixed inset-0 bg-[rgba(0,0,0,0.43)] bg-opacity-50 z-40 md:hidden transition-transform duration-300 items-center">
            <div
              className=" sm:w-1/2 w-[10%] h-full"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="absolute right-0 sm:w-[50%] w-[90%] h-[95%] bg-white shadow-lg p-8 transition-transform duration-300 rounded-l-3xl">
              <button onClick={() => setIsOpen(false)}>
                <RxCross2 className="text-xl cursor-pointer" />
              </button>
              {["About", "Pricing", "Portfolio", "Blog", "Contact"].map(
                (item) => {
                  const isActive = location.pathname.includes(
                    item.toLowerCase()
                  );
                  return (
                    <div key={item} className="pt-5">
                      <Link
                        to={`/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className={`block text-primary py-4 font  hover:text-secandari transition duration-300 font-normal font-Nunito-font ${
                          isActive ? "text-secandari" : ""
                        }`}
                      >
                        {item}
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
