import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// internal imports
import useStyles from "./styles";
import memories from "../../images/memories.png";

function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(userInfo);
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // JWT....
    setUser(userInfo);
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth")}
          >
            sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
