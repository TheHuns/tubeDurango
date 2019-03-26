import React, { Component } from "react";

// Components
import CarouselHeader from "./components/CarouselHeader";
import MainNav from "./components/MainNav";
import InfoSection from "./components/InfoSection";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <CarouselHeader />
        <InfoSection />
      </React.Fragment>
    );
  }
}

export default App;
