import Hero from "../componnts/Hero";
import Navbar from "../componnts/Navbar";
import AboutImg from "../componnts/images/night.jpg";
import Footer from "../componnts/Footer";
import AboutData from "../componnts/AboutData";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutData />
      <Footer />
    </>
  );
}

export default About;
