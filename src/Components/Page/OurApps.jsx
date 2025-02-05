import FeatureItem from "./FeatureItem";
import { FaCog, FaEdit, FaCode, FaFolderOpen } from "react-icons/fa";
import FeatureItem2 from "./FeatureItem2";
const OurApps = () => {
  return (
    <section className="py-20 bg-[rgba(249,248,248,0.71)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full flex justify-center text-center mx-auto">
            <div className="text-center pb-10">
              <span
                data-aos="fade-left"
                data-aos-duration="1500"
                className="text-secandari block text-lg font-Nunito-font font-normal"
              >
                Quisque tellus risus, adipisci viverra
              </span>
              <h2
                data-aos="fade-right"
                data-aos-duration="1500"
                className="sm:text-5xl text-4xl font-normal text-primary font-Montez py-3"
              >
                Mobile App Designs
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-8 justify-center space-x-4">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-full lg:w-[40%] md:w-[45%] sm:w-full text-center md:text-right space-y-6 sm:px-20 md:px-2 pb-6 md:pb-0"
          >
            <FeatureItem
              icon={<FaCog />}
              title="Theme Options"
              aosType="fade-left"
            />
            <FeatureItem
              icon={<FaEdit />}
              title="Customization"
              aosType="fade-left"
              delay={350}
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-full lg:w-[40%] md:w-[45%] sm:w-full text-center md:text-left space-y-6 sm:px-20 md:px-2 "
          >
            <FeatureItem2
              icon={<FaCode />}
              title="Powerful Code"
              aosType="fade-right"
            />
            <FeatureItem2
              icon={<FaFolderOpen />}
              title="Documentation"
              aosType="fade-right"
              delay={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApps;
