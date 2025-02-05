import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const OurProces = () => {
  const steps = [
    {
      step: "01",
      title: "Concept",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      step: "02",
      title: "Plan",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      step: "03",
      title: "Design",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      step: "04",
      title: "Development",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <section className="py-20  bg-[#e7e4e421] text-center">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-secandari block text-lg font-Nunito-font font-normal"
          >
            Quisque tellus risus, adipisci
          </span>
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-5xl font-normal text-primary font-Montez mt-2"
          >
            Our Work Process
          </h2>
        </div>
        <div className="grid grid-cols-2 justify-center text-center gap-6 px-68 mx-auto">
          {steps.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="p-8 rounded-lg shadow-sm w-80 scale-95 hover:scale-100 duration-500 bg-[#e7e4e441] transition-all"
            >
              <span className="block text-2xl font-bold text-secandari mb-2">
                {item.step}
              </span>
              <p className="font-semibold text-primary text-xl font-Opensans mb-2">
                {item.title}
              </p>
              <p className="text-brand font-Nunito-font font-normal text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProces;
