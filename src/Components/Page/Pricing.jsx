import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      price: 9.95,
      features: ["Support forum", "Free hosting"],
      unavailable: [
        "40MB of storage space",
        "Social media integration",
        "10GB of storage space",
      ],
    },
    {
      name: "Popular",
      price: 19.95,
      features: ["Support forum", "Free hosting", "40MB of storage space"],
      unavailable: ["Social media integration", "10GB of storage space"],
    },
    {
      name: "Enterprise",
      price: 29.95,
      features: [
        "Support forum",
        "Free hosting",
        "40MB of storage space",
        "Social media integration",
      ],
      unavailable: ["10GB of storage space"],
    },
  ];
  return (
    <section className="pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="">
          <span
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-secandari block text-lg font-Nunito-font font-normal"
          >
            Quisque tellus risus, adipisci
          </span>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-5xl font-semibold text-primary font-Montez text-center pt-2 pb-16"
          >
            Pricing Offers
          </h2>
        </div>
        <div className="mb-10 flex justify-center space-x-4 bg-white w-fit  rounded-3xl gap-8 mx-auto scale-95">
          <button
            className={`text-lg font-medium font-Nunito-font transition px-20 py-2  rounded-3xl duration-100  transition-all${
              billingCycle === "monthly"
                ? " text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-20 h-full duration-100 transition-all"
                : "text-brand"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={` py-2 text-lg font-medium font-Nunito-font px-20 rounded-3xl transition duration-100 transition-all${
              billingCycle === "yearly"
                ? "text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 to-90% px-20 duration-100 transition-all"
                : "text-brand"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-28">
          {plans.map((plan, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={index}
              className="bg-[#f5f4f4] py-7 px-16 shadow-xl rounded-lg justify-center mx-auto scale-95 hover:scale-100 duration-300 "
            >
              <h3 className="text-2xl text-brand font-Nunito-font font-medium">
                {plan.name}
              </h3>
              <p className="text-brand text-2xl font-semibold font-Montez border-b pb-2 border-brand">
                The standard version
              </p>
              <div className="text-2xl font-bold text-[#3fcfd4ba] font-Montez my-4">
                $
                {billingCycle === "monthly"
                  ? plan.price.toFixed(2)
                  : (plan.price * 10).toFixed(2)}
                <span className="text-xl text-brand">/{billingCycle}</span>
              </div>
              <ul className="text-left mb-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-brand text-base font-normal font-Nunito-font "
                  >
                    ✔ {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li
                    key={i}
                    className="text-[#5c5e60f5]  text-base font-normal font-Nunito-font"
                  >
                    <span className="text-red-300">✖</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-fit  text-white text-base font-medium font-Opensans py-2.5 px-8 rounded-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 scale-95">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
