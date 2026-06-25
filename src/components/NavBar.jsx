import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          Notification System
        </Typography>

        <Button color="inherit" component={Link} to="/">
          All Notifications
        </Button>

        <Button color="inherit" component={Link} to="/priority">
          Priority
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;