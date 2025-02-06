import Counter from "./Counter";

const CountersSection = () => {
  return (
    <section
      className="py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://trax.acrothemes.com/bootstrap-v5/images/counter-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center text-center mx-auto">
          {/* Left Counter */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <Counter target={2010} />
            <h3 className="text-white text-base lg:text-lg mt-4 font-light">
              Since We Started
            </h3>
          </div>

          {/* Center Text */}
          <div className="w-full md:w-1/3 px-4 pb-6 md:pb-0">
            <p className="text-white lg:text-lg text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu, lobortis id interdum vitae, interdum eget elit.
            </p>
          </div>

          {/* Right Counter */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <Counter target={895} />
            <h3 className="text-white text-base lg:text-lg mt-4 font-light">
              Projects Completed
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
