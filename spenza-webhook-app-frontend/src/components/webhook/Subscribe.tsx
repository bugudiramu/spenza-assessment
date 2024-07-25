import axios from "axios";
import React, { useState } from "react";
import styles from "./Subscribe.module.css";

const Subscribe: React.FC = () => {
  const [url, setUrl] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3001/webhook/subscribe",
        { url, event },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUrl("");
      setEvent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Subscribe to Webhooks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Source URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Event"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
