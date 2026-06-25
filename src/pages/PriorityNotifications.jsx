import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";

function PriorityNotifications() {
  const [priorityList, setPriorityList] = useState([]);

  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  function calculatePriority(notification) {
    const weight = weights[notification.Type] || 1;

    const timestamp = new Date(
      notification.Timestamp.replace(" ", "T")
    ).getTime();

    return weight * 1000000000000 + timestamp;
  }

  useEffect(() => {
    async function loadPriority() {
      try {
        // Fetch more notifications
        const data = await fetchNotifications(1, 100, "All");

        console.log("Priority API:", data);

        const notifications = data.notifications || data;

        const sorted = [...notifications]
          .sort(
            (a, b) =>
              calculatePriority(b) - calculatePriority(a)
          )
          .slice(0, 10);

        console.log("Sorted:", sorted);

        setPriorityList(sorted);
      } catch (error) {
        console.error("Priority error:", error);
      }
    }

    loadPriority();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      {priorityList.length === 0 ? (
        <Typography>No Priority Notifications</Typography>
      ) : (
        priorityList.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
            viewed={false}
          />
        ))
      )}
    </Container>
  );
}

export default PriorityNotifications;