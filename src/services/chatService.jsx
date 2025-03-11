// src/services/chatService.jsx

/**
 * Sends a user query to the backend API and returns the bot's response.
 * @param {string} query - The user's message.
 * @returns {Promise<{response: string}>} - The bot's response.
 */
export const sendMessageToBackend = async (query) => {
  try {
    const response = await fetch("YOUR_BACKEND_API", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from the server.");
    }

    const data = await response.json();
    return data; // Return the bot's response
  } catch (error) {
    console.error("Error fetching response:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};