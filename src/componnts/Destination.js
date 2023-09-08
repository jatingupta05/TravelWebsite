import Mountain1 from "../componnts/images/1.jpg";
import Mountain2 from "../componnts/images/2.jpg";
import Mountain3 from "../componnts/images/5.jpg";
import Mountain4 from "../componnts/images/8.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to Explore</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Our Taal volcano tour brings an awe-inspiring view of the worlds
      smallest volcano. A perfect trip for the family enjoying a scenic
      adventure with a 360 view of the famous lake. A 90-minute ride from
      Manila brings you to the city of Tagaytay and its cool climate. A
      city filled with landmarks, Cafes and attractions packed for a
      weekend getaway. The tour starts with a quick pump boat ride going
      to the crater. The pristine and calm water gives a smooth sailing
      experience viewing the city from afar. Tourist will get to ride a
      horse throughout their hike to the crater. This quick tour from
      Manila will give you a unique trip with a thrill of adventure on the
      side."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldol, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the 
        province of Batangas. It offers a scenic view of nearby 
        Batangas mountains and beaches. Additionally, Mt. Daguldol 
        has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is 
        exactly situated in Sitio Biga, Barangay, Hugom San Juan, 
        Batangas. It is bound between the municipality of San Juan 
        and Lobo. The Lobo municipality is also a highlands, with 
        Mt. Naguiling being the tallest mountain.The Tagalog word 
        “Daguldol” means a feeling of apprehension and grandiosity. 
        According to locals, the mountain was named as such because 
        it describes the magnificence of the mountain range and the 
        blunt rolling of its slopes. Mt. Daguldol has a total trail 
        length of nine kilometers. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
