import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { fetchNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    loadData();
  }, [filter, page]);

  async function loadData() {
  try {
    console.log("Loading notifications...");

    const data = await fetchNotifications(page, 10, filter);

    console.log("API RESPONSE:", data);

    const list = data.notifications || data;

    console.log("LIST:", list);

    setNotifications(list);
  } catch (err) {
    console.error("ERROR:", err);
  }
}

  function markViewed(id) {
    if (!viewed.includes(id)) {
      setViewed([...viewed, id]);
    }
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <FilterBar filter={filter} setFilter={setFilter} />

      {notifications.map((item) => (
        <div key={item.ID} onClick={() => markViewed(item.ID)}>
          <NotificationCard
            notification={item}
            viewed={viewed.includes(item.ID)}
          />
        </div>
      ))}

      <Button
        variant="contained"
        sx={{ mr: 2 }}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        Prev
      </Button>

      <Button
        variant="contained"
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </Container>
  );
}

export default AllNotifications;