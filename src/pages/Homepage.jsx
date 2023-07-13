import React from "react";
import { useEvent } from "../contextandreducer/EventContext";
import EventCard from "../components/EventCard";

function Homepage() {
  const { state } = useEvent();
  console.log(state.events);
  return (
    <div className="flex flex-col mt-10">
      <div className=" flex flex-row justify-between ">
        <div className=" place-items-start text-xl font-semibold">
          Meetup Events
        </div>
        <div>
          <select
            name="select event type"
            // value={formData.repeat}
            onChange={(e) => {
              //   formOnchangeHandler(e);
            }}
          >
            <optgroup label="select event type">
              select event type
              <option value="both">both</option>
              <option value="offline">offline</option>
              <option value="online">online</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 ">
        {state.events.map((eve) => (
          <EventCard key={eve.id} event={eve} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
