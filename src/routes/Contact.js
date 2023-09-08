import Hero from "../componnts/Hero";
import Navbar from "../componnts/Navbar";
import ContactImg from "../componnts/images/3.jpg";
import Footer from "../componnts/Footer";
import ContactForm from "../componnts/ContactForm";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default About;
