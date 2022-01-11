import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

// internal imports
import useStyles from "./styles";
import Post from "./Post/Post";
import CardLoadingSkeletons from "../custom/CardSkeleton/CardLoadingSkeletons";

function Posts({ setCurrentId }) {
  let { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CardLoadingSkeletons posts={posts} classes={classes} />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
