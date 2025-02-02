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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="">
          <span className="text-lg font-medium text-[#24cdd5] text-center">
            Quisque tellus risus, adipisci
          </span>
          <h2 className="text-4xl font-medium text-[#384141] text-center pt-1 pb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-gray-500">The standard version</p>
              <div className="text-2xl font-bold text-blue-600 my-4">
                $
                {billingCycle === "monthly"
                  ? plan.price.toFixed(2)
                  : (plan.price * 10).toFixed(2)}
                <span className="text-sm text-gray-500">/{billingCycle}</span>
              </div>
              <ul className="text-left mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    ✔ {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li key={i} className="">
                    ✖ {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
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
