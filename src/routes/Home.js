import Hero from "../componnts/Hero";
import Navbar from "../componnts/Navbar";
import HomeImg from "../componnts/images/12.jpg";
import Destination from "../componnts/Destination";
import Trip from "../componnts/Trip";
import Footer from "../componnts/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
