import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import HashScroll from "./HashScroll";
import Navbar from "./Navbar";
import TawkChat from "../TawkChat";

const Layout = () => {
  return (
    <>
      <HashScroll />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TawkChat />
    </>
  );
};

export default Layout;