import React from "react";
import { meetupdata } from "../components/Data";

export const initialData = {
  events: meetupdata.meetups,
};

function EventReducer() {
  return <div>EventReducer</div>;
}

export default EventReducer;
