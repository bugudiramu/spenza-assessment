import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const RealTimeLog: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).sub : null;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();

    socket.on("new_event", (event: any) => {
      if (event.user === userId) {
        setEvents((prevEvents) => [event, ...prevEvents]);
      }
    });

    return () => {
      socket.off("new_event");
    };
  }, [token, userId]);

  return (
    <div>
      <h2>Real-Time Event Log</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index}>
              <strong>{event.eventType}</strong>:{" "}
              {JSON.stringify(event.payload)}
              <br />
              <small>{new Date(event.timestamp).toLocaleString()}</small>
            </li>
          ))
        ) : (
          <div>No events found...</div>
        )}
      </ul>
    </div>
  );
};

export default RealTimeLog;
