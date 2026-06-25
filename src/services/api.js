import { TOKEN } from "../token";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function fetchNotifications(page = 1, limit = 10, type = "All") {
  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;

  if (type !== "All") {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
}