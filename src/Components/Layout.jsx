import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [loading]);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Layout;
