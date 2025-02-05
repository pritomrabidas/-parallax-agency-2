import About from "./Page/About";
import BlogSection from "./Page/BlogSection";
import Contact from "./Page/Contact";
import Portfolio from "./Page/Portfolio";
import Pricing from "./Page/Pricing";
// import Pricing from "./Page/Pricing";

const Page = () => {
  return (
    <div className="py-[80px]">
      <About />
      <Pricing />
      <Portfolio />
      <BlogSection />
      <Contact/>
    </div>
  );
};

export default Page;
