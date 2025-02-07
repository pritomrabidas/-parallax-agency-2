import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <section>
      <div className="bg-[url('home-1.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="bg-[rgba(0,0,0,0.66)] 2xl:pt-44 xl:pt-40 lg:pt-32  pt-32 2xl:pb-52 xl:pb-48 lg:pb-44 md:pb-40 pb-36">
          <div className="container mx-auto px-0 sm:px-0 md:px-10 lg:px-16 xl:px-16 2xl:px-16">
            <div className="w-full mx-auto text-center">
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="font-medium text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-Nunito-font text-[#fcfcfc] "
              >
                The Ultimate
              </p>
              <h3
                data-aos="fade-right"
                data-aos-duration="1500"
                className="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-Opensans text-[#fcfcfc] mb-1 py-2"
              >
                Creative Business
              </h3>
              <h2
                data-aos="fade-left"
                data-aos-duration="1500"
                className="font-medium text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-Nunito-font text-[#fcfcfc] mb-3"
              >
                In Market
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                className="w-[95%] sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] text-base font-normal font-Opensans text-[#fcfcfc] mx-auto"
              >
                The Best Multipurpose Multi Page Template in Market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
