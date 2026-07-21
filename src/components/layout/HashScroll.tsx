import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const timer = window.setTimeout(scrollToElement, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScroll;