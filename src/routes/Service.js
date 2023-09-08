import Hero from "../componnts/Hero";
import Navbar from "../componnts/Navbar";
import ServiceImg from "../componnts/images/4.jpg";
import Footer from "../componnts/Footer";
import Trip from "../componnts/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Our Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
