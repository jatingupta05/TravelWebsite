import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../componnts/images/6.jpg";
import Trip2 from "../componnts/images/img.jpg";
import Trip3 from "../componnts/images/9.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover Unique Destinations using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="The Ministry of Tourism and Creative Economy 
          introduced InDOnesia CARE, a symbol of support for 
          Indonesia’s strong effort in implementing the cleanliness, 
          health, safety, and environment protocols across the 
          tourism industry as mandatory precautions. All to assure 
          travelers that InDOnesia CARE for your safety, health, 
          hygiene and comfort."
        />

        <TripData
          image={Trip2}
          heading="Trip to Mayalsia"
          text="Malaysia is a beautifully complex vacation 
          destination, a land where ancient rainforests give
           way to multicultural city life. Capital city 
           Kuala Lumpur is visually defined by the iconic 
           Petronas Twin Towers, while in charming Melaka the 
           vibe is more quaint and historical. Many of the 
           country’s national parks offer opportunities for 
           fantastic whitewater rafting, and the exclusive 
           Sipadan dive site (off the east coast of Borneo) 
           is among the best in the world."
        />

        <TripData
          image={Trip3}
          heading="Trip to France"
          text="There's much more to France than Paris—from 
          the fairy-tale châteaux of the Loire Valley to the 
          lavender fields of Provence, and the French Riviera's 
          celebrity-studded beaches. World-famous gastronomy 
          and fine wines provide the perfect complement to the 
          country's alpine views and architectural masterpieces."
        />
      </div>
    </div>
  );
}

export default Trip;
