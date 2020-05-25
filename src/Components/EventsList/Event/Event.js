import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
const EventList = ({ event }) => {
  console.log(event.image);
  if (event)
    return (
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <Card className="mb-2">
          <CardTitle className="text-center">{event.eventName}</CardTitle>
          <CardBody>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <img src={event.image} alt={event.eventName} />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12" />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  else return null;
};

export default EventList;
