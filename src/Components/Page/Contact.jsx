import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
const Contact = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="container mx-auto py-8 px-16 rounded-lg">
        <div className="text-center">
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-lg font-normal font-Nunito-font text-primary text-center"
          >
            Quisque tellus risus
          </p>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-5xl font-semibold text-primary font-Montez text-center py-2"
          >
            Contact Us
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" text-brand text-base font-Opensans font-normal pt-2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[50%] 2xl:w-[60%] mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            explicabo corrupti, voluptatum laborum consectetur iure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 pt-20">
          {/* Contact Form */}
          <div data-aos="fade-right" data-aos-duration="2000">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-3 border border-gray-300 rounded outline-none text-sm text-brand font-normal font-Nunito-font"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded outline-none text-sm text-brand font-normal font-Nunito-font"
              />
              <textarea
                placeholder="Message"
                required
                className="w-full h-20 p-3 border border-gray-300 rounded outline-none text-sm text-brand font-normal font-Nunito-font"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white py-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <span className="text-secandari text-base font-normal font-Nunito-font">
                Trax Agency Worldwide
              </span>
              <h3 className="text-xl font-semibold text-primary font-Nunito-font">
                Our London Agency
              </h3>
            </div>
            <div className="space-y-2 text-brand text-sm font-normal font-Opensans">
              <p>Address: 309, New Cavendish St, EC1Y 3WK</p>
              <p>0800 214 5252</p>
              <p>0400 20778972</p>
              <p>
                <a
                  href="mailto:polpo@traxagency.com"
                  className="text-secandari text-base font-normal font-Nunito-font"
                >
                  polpo@traxagency.com
                </a>
              </p>
              <p className=" text-brand text-sm font-normal font-Opensans">
                Mon-Fri: 9am-5pm
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
