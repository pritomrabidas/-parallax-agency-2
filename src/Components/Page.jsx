import About from "./Page/About";
import Banner from "./Page/Home";
import Pricing from "./Page/Pricing";
// import Pricing from "./Page/Pricing";

const Page = () => {
  return (
    <div className="py-[80px]">
      <Banner />
      <About />
      <Pricing/>
    </div>
  );
};

export default Page;
