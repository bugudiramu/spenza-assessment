# Spenza Assessment

Follow these steps to set up and run the Spenza assessment project:

## Frontend Installation

1. Navigate to the frontend directory:
   ```bash
   cd spenza-webhook-app-frontend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Backend Installation

1. Navigate to the backend directory:
   ```bash
   cd spenza-webhook-app-backend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

## Simulator Setup

1. Navigate to the simulator directory:
   ```bash
   cd spenza-webhook-simulator
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the simulator:
   ```bash
   npm run start:dev
   ```

4. **Important:** Update the user ID in the simulator code. You can find this ID in the MongoDB `users` collection.

## MongoDB Setup

Ensure you have MongoDB installed and running locally. If you need assistance with setting up MongoDB, refer to the [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/).