import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    const style = {
      borderWidth: "0"
    };
    return (
      <div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=280&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FDenver"
          style={style}
          width="400"
          height="280"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}
