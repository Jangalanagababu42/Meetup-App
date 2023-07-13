import React from "react";

function EventCard({ event }) {
  return (
    <div
      className=" rounded-lg pb-5 relative cursor-pointer mb-4 "
      style={{
        listStyle: "none",

        display: "inline-block",
        margin: "10px",
      }}
      //   onClick={() => navigate(`/country/${conti.id}`)}
    >
      <div className=" rounded-lg">
        <img
          src={event.eventThumbnail}
          className="object-cover h-52 w-80"
          alt="img"
        />
        <div className=" absolute top-2 left-3 bg-white flex flex-row px-2  rounded-lg">
          {event.eventType} Event
        </div>
      </div>
      <div className=" absolute  left-0">
        <div className=" text-gray">{event.eventStartTime}</div>
        <div className=" font-semibold text-lg">{event.title}</div>
      </div>
    </div>
  );
}

export default EventCard;
