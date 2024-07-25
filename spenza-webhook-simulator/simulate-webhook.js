const axios = require("axios");

const webhookUrl = "http://localhost:3001/events"; // Replace with your actual webhook endpoint URL
const sampleData = {
  eventType: "user.created",
  url: "http://localhost:3001/events",
  payload: "some payload",
  user: "66a2310f2dbcfdb591ad22f0", // Change this user id as well
};

// Function to simulate sending webhook events
async function sendWebhook() {
  try {
    const response = await axios.post(webhookUrl, sampleData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Webhook sent successfully:", response.data);
  } catch (error) {
    console.error(
      "Error sending webhook:",
      error.response ? error.response.data : error.message
    );
  }
}

// Simulate sending webhook events
sendWebhook();
