import { Grid } from "@material-ui/core";
import React from "react";
import CardSkeleton from "./CardSkeleton";

function CardLoadingSkeletons({ classes }) {
  const posts = ["kldfj(302s", "ksl@#fd", "kfsido0923lfd", "ki30923"];
  return (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      justifyContent="center"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post} item xs={12} sm={12} md={6}>
          <CardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardLoadingSkeletons;
