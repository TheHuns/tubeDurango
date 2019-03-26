import React, { Component } from "react";
import { Container } from "reactstrap";

// Components
import CarouselHeader from "./components/CarouselHeader";
import MainNav from "./components/MainNav";
import InfoSection from "./components/InfoSection";
import Location from "./components/Location";
import Contact from "./components/Contact";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <CarouselHeader />
        <Container>
          <InfoSection />
          <Location />
          <Contact />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
