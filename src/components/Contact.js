import React, { Component } from "react";
import { Container } from "reactstrap";

import Calendar from "./Calendar";

export default class Contact extends Component {
  render() {
    return (
      <Container id="contact">
        <div className="calendar">
          <Calendar />
        </div>
        <div className="contact-info">
          <h3>Call Today!</h3>
          <p>
            <strong>(970) 555 - 5555</strong>
          </p>
          <p>
            Give us a call to get the most up to date info for the river and
            book your outing!
          </p>
          <p>
            <i>Check calendar here also for booking options</i>
          </p>
        </div>
      </Container>
    );
  }
}
