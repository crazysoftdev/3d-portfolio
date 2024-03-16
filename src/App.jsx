import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Works />
          <Feedbacks />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
