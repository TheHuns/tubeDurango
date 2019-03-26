import React, { Component } from "react";

export default class Location extends Component {
  render() {
    const maprouterStyle = {
      position: "relative",
      textAlign: "right",
      height: "400px",
      width: "100%",
      margin: "auto",
      marginTop: "3rem",
      marginBottom: "3rem"
    };
    const gmapStyle = {
      overflow: "hidden",
      background: "none",
      height: "400px",
      width: "100%"
    };

    return (
      <React.Fragment>
        <hr />
        <h2 id="location">How to get to our staging area</h2>
        <div class="mapouter" style={maprouterStyle}>
          <div class="gmap_canvas" style={gmapStyle}>
            <iframe
              width="100%"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=900%20roosa%20av&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
            Werbung: <a href="https://www.pureblack.de">Pure Black GmbH</a>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
