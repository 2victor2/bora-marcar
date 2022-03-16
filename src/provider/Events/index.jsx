import { createContext, useContext, useEffect, useState } from "react";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";
import { useItemsList } from "../ItemsList";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { userToken, userId } = useAuth();
  const { itemsList } = useItemsList();

  const [userEvents, setUserEvents] = useState([]);

  const getUserEvents = () => {
    boraMarcarApi
      .get(`/events?userId=${userId}`)
      .then(({ data }) => setUserEvents(data))
      .catch((error) => console.log(error));
  };
  const handleCreateEvent = (data) => {
    const newEvent = { ...data, itemsList, userId };
    boraMarcarApi
      .post(
        "/events",
        newEvent,
        { headers: { Authorization: `Bearer ${userToken}` } }
      )
      .then(({ data }) => {
        setUserEvents([...userEvents, data]);
      });
  };

  useEffect(() => {
    if (userId) {
      getUserEvents();
    }
  }, [userId]);

  return (
    <EventContext.Provider value={{ userEvents, handleCreateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);