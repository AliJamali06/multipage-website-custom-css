import next from "next";
import Services from "./services/page";
import ContactPage from "./about-me/page";


export default function Home() {
  return (
  <div>
    <Services/>
    <ContactPage/>
  </div>
    
        );
}
