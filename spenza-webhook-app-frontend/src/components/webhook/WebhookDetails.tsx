import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WebhookDetails: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3001/webhook/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div>
      <h2>Webhook Details</h2>
      {details ? (
        <pre>{JSON.stringify(details, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WebhookDetails;
