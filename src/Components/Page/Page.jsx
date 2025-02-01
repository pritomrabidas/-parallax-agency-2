import About from "./About";
import CountersSection from "./CountersSection";
import Banner from "./Home";
import OurApps from "./OurApps";
import OurProces from "./OurProces";
import Team from "./Team";

const Page = () => {
  return (
    <div className="py-[80px]">
      <Banner />
      <About />
      <OurProces />
      <OurApps />
      <CountersSection />
      <Team/>
    </div>
  );
};

export default Page;
