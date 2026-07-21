import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import HashScroll from "./HashScroll";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <HashScroll />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;