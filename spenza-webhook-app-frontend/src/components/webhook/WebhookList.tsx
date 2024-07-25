import axios from "axios";
import React, { useEffect, useState } from "react";

const WebhookList: React.FC = () => {
  const [webhooks, setWebhooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchWebhooks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3001/webhook/user-webhooks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setWebhooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWebhooks();
  }, []);

  return (
    <div>
      <h2>Subscribed Webhooks</h2>
      <ul>
        {webhooks.length ? (
          webhooks.map((webhook) => (
            <li key={webhook._id}>
              {webhook.url} - {webhook.event}
            </li>
          ))
        ) : (
          <div>No webhooks found...</div>
        )}
      </ul>
    </div>
  );
};

export default WebhookList;
