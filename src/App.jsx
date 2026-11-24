import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Glance from "./components/Glance.jsx";
import Story from "./components/Story.jsx";
import BlueLight from "./components/BlueLight.jsx";
import TbAudit from "./components/TbAudit.jsx";
import Publications from "./components/Publications.jsx";
import Credentials from "./components/Credentials.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#story">Skip to the story</a>
      <Nav />
      <main>
        <Hero />
        <Glance />
        <Story />
        <div id="research">
          <BlueLight />
          <TbAudit />
        </div>
        <Publications />
        <Credentials />
      </main>
      <Contact />
    </MotionConfig>
  );
}
