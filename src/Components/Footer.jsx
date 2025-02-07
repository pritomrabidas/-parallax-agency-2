import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { FaMobileScreen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#191f27] text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Contact Info */}
          <div>
            <Link to="/" className="text-3xl text-white font-Montez font-bold">
              Pritom
            </Link>
            <p className="my-4 text-gray-300 text-sm font-Nunito-font font-normal">
              Keep away from people who try to belittle your ambitions. Small
              people always do that but the really great Friendly.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <FaMobileScreen className="text-3xl" />
              <p className="text-white text-sm font-Nunito-font font-normal">
                +01 - 123 - 4567 <br />
                <Link to="" className="text-secandari">
                  web@support.com
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <TiSocialFacebook />
              </Link>
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <TiSocialLinkedin />
              </Link>
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <TiSocialTwitter />
              </Link>
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <CiInstagram />
              </Link>
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <FaWhatsapp />
              </Link>
              <Link
                to=""
                className="text-brand text-lg hover:text-secandari duration-300"
              >
                <IoMailOutline />
              </Link>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-xl text-white font-Opensans font-semibold mb-6">
              Latest News
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm font-Nunito-font font-normal">
              <li>
                <Link to="java(0)" className="hover:text-white">
                  Aenean tristique justo et...
                </Link>{" "}
                <span className="text-secandari duration-300 block">
                  15 March 2019
                </span>
              </li>
              <li>
                <Link to="java(0)" className="hover:text-white">
                  Phasellus dapibus dictum augue...
                </Link>{" "}
                <span className="text-secandari duration-300 block">
                  15 March 2019
                </span>
              </li>
              <li>
                <Link to="java(0)" className="hover:text-white">
                  Mauris blandit vitae. Praesent non...
                </Link>{" "}
                <span className="text-secandari duration-300 block">
                  15 March 2019
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl text-white font-Opensans font-semibold mb-6">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-white font-Opensans font-normal">
              <li>
                <Link to="/" className="hover:text-secandari duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secandari duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-secandari duration-300"
                >
                  Our Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-secandari duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-secandari duration-300">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-secandari duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl text-white font-Opensans font-semibold mb-6">
              Business Hours
            </h3>
            <p className="mb-4 text-gray-300 text-sm font-Opensans font-normal">
              Our support is available 24/7.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm font-Opensans font-normal">
              <li>
                <span className="font-semibold">Monday-Saturday:</span>{" "}
                8:00-18:00
              </li>
              <li>
                <span className="font-semibold">Friday:</span> 09:00-21:00
              </li>
              <li>
                <span className="font-semibold">Sunday:</span> 09:00-20:00
              </li>
              <li>
                <span className="font-semibold">Calendar Events:</span> 24-Hour
                Shift
              </li>
            </ul>
          </div>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-14 right-4 z-10 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 p-2.5 text-xs text-white shadow-md cursor-pointer ${
              showButton ? "block" : "hidden"
            }`}
          >
            <FaChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
