import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Components/Page/About";
import Page from "./Components/Page";
import Pricing from "./Components/Page/Pricing";
import Portfolio from "./Components/Page/Portfolio";
import Contact from "./Components/Page/Contact";
import BlogSection from "./Components/Page/BlogSection";
import Home from "./Components/Page/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Page/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/blog" element={<BlogSection/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
