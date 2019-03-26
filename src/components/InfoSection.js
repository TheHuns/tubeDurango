import React, { Component } from "react";

export default class InfoSection extends Component {
  render() {
    return (
      <div className="info-section" id="info-section">
        <h2>What to expect..</h2>
        <div className="info-inner-container">
          <div className="pic-box">
            <img
              src="https://riverviewcampground.com/tubing/tubing_images/Images/11.jpg"
              alt="tubers loading bus"
            />
          </div>
          <div className="info-text-box">
            <h3>We would like to promise you the perfect sunny day but...</h3>
            <p>
              Here in the mountains you could get just about any weather even in
              the middle of the summer. Check the weather before planning your
              trip and follow the guildlines below to ensure the best experience
              possible.{" "}
            </p>
            <ul>
              <li>
                Float times on the water can vary depending on water flow and
                your group size.
              </li>
              <li>
                Bring plenty of sunscreen and water even on cloudy days. (Check
                local stores for a dry bag if needed)
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
