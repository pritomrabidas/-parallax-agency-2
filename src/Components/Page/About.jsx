import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-[60%] text-center md:text-left ">
            <div className="">
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-primary text-4xl font-Nunito-font font-medium leading-tight w-[65%]"
              >
                Let’s take your <span className="text-secandari">Business</span>{" "}
                to Next Level
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="py-6 text-primary text-sm font-normal font-Opensans w-[80%]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu, lobortis id interdum vitae, interdum eget elit.
              Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit
              ultrices maximus.
            </p>
            <Link
              data-aos="fade-up"
              data-aos-duration="2000"
              to="java(0)"
              className="inline-block px-6 py-3 text-primary bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:opacity-80 transition"
            >
              Learn More
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-full md:w-[40%] flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <img
              src="https://trax.acrothemes.com/bootstrap-v5/images/awesome-feature.png"
              alt="SEO"
              className="max-w-full h-auto rounded-full bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
