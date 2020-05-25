import React from "react";
import Loading from "../Loading/Loading";
import Event from "./Event";

const EventList = ({ events = [], isLoading, err }) => {
  if (isLoading) {
    return <Loading />;
  } else if (err) {
    return <h1>{err}</h1>;
  } else {
    return (
      <div className="container">
        <div className="row">
          {events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </div>
      </div>
    );
  }
};

export default EventList;
