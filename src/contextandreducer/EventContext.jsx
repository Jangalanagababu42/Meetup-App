import React, { createContext, useContext, useReducer } from "react";
import EventReducer, { initialData } from "./EventReducer";

const EventContext = createContext();

function EventProvider({ children }) {
  const [state, dispatch] = useReducer(EventReducer, initialData);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
}
const useEvent = () => useContext(EventContext);
export { useEvent, EventProvider };
