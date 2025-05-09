import { useEffect } from "react";
import Footer from "../components/Footer";

import Navbar2 from "../components/Header/Navbar2";
import Services from "../components/Services";
import Steps from "../components/Steps";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col almarai-extrabold">
      <Navbar2 />

      <Steps />

      <Services />

      <Footer />
    </div>
  );
};

export default About;
