import About from "./Page/About";
import CountersSection from "./Page/CountersSection";
import Banner from "./Page/Home";
import OurApps from "./Page/OurApps";
import OurProces from "./Page/OurProces";
import Pricing from "./Page/Pricing";
import Team from "./Page/Team";

const Page = () => {
  return (
    <div className="py-[80px]">
      <Banner />
      <About />
      <OurProces />
      <OurApps />
      <CountersSection />
      <Team />
      <Pricing/>
    </div>
  );
};

export default Page;
