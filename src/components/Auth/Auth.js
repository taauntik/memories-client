import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Container,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// internal imports
import useStyles from "./styles";
import Input from "./Input";
import { signup, signin } from "../../actions/auth";
import { useEffect } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const classes = useStyles();
  const { error, authData } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setIsAuthLoading(true);
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
    if (error) {
      setIsAuthLoading(false);
    } else if (!error && authData) {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    setUser(localStorage.getItem("profile"));
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevState) => !prevState);
    setShowPassword(false);
  };

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  if (user) {
    navigate("/posts");
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          {isAuthLoading && !authData && !error ? (
            <CircularProgress size="5em" />
          ) : (
            <>
              <Avatar className={classes.avatar}>
                <LockOutLinedIcon />
              </Avatar>
              <Typography variant="h5">
                {isSignup ? "Sign Up" : "Sign In"}
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {isSignup && (
                    <>
                      <Input
                        name="firstname"
                        label="First name"
                        handleChange={handleChange}
                        half
                      />
                      <Input
                        name="lastname"
                        label="Last name"
                        handleChange={handleChange}
                        half
                      />
                    </>
                  )}
                  <Input
                    name="email"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                  />
                  <Input
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    handleShowPassword={handleShowPassword}
                    type={showPassword ? "text" : "password"}
                  />
                  {isSignup && (
                    <Input
                      name="confirmPassword"
                      label="Repeat Password"
                      handleChange={handleChange}
                      type="password"
                    />
                  )}
                </Grid>
                {error && (
                  <Typography color="secondary">
                    Something Went wrong! Please try again
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button onClick={switchMode}>
                      {isSignup
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Paper>
      </Container>
    );
  }
}

export default Auth;
