import { Card, CardContent, Typography, Chip } from "@mui/material";

function NotificationCard({ notification, viewed }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Chip
          label={viewed ? "Viewed" : "New"}
          color={viewed ? "success" : "error"}
          sx={{ mb: 2 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography>
          Type: {notification.Type}
        </Typography>

        <Typography>
          Timestamp: {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;