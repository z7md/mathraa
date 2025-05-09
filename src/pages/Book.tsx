import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Header/Navbar2";
import Types from "../components/Types";



const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col almarai-extrabold">
      <Navbar2 />

      <Types />


      <Footer />
    </div>
  );
};

export default Book;
