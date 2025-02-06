import { Link } from "react-router-dom";
import OurApps from "./OurApps";
import CountersSection from "./CountersSection";
import Team from "./Team";
import OurProces from "./OurProces";
const About = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto md:px-20 px-2">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-[60%] text-center md:text-left ">
            <div className="">
              <h2
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-primary 2xl:text-4xl lg:text-4xl sm:text-3xl text-2xl font-Nunito-font font-medium leading-tight 2xl:w-[65%] xl:w-[65%] lg:w-[85%] md:w-[95%] w-[85%] md:text-start text-center mx-auto md:mx-0"
              >
                Let’s take your <span className="text-secandari">Business</span>{" "}
                to Next Level
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="py-4 text-primary text-xs lg:text-sm font-normal font-Opensans 2xl:w-[80%] lg:w-[80%] md:w-[95%]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu, lobortis id interdum vitae, interdum eget elit.
              Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit
              ultrices maximus.
            </p>
            <Link
              data-aos="fade-up"
              data-aos-duration="1500"
              to="java(0)"
              className="inline-block px-6 py-3 text-primary bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:opacity-80 transition"
            >
              Learn More
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="w-[80%] sm:w-[70%] md:w-[40%] flex justify-center md:justify-end mt-10 md:mt-0 mx-0 md:mx-0 sm:mx-auto"
          >
            <img
              src="https://trax.acrothemes.com/bootstrap-v5/images/awesome-feature.png"
              alt="SEO"
              className="max-w-full h-auto rounded-full bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </div>
      <OurProces />
      <OurApps />
      <CountersSection />
      <Team />
    </section>
  );
};

export default About;
