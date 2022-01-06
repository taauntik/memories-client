import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Grow } from "@material-ui/core";

// internal imports
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";

function Home() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          className={classes.mainContainer}
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form setCurrentId={setCurrentId} currentId={currentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
