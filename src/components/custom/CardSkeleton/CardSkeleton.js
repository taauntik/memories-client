import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Card } from "@material-ui/core";

function CardSkeleton() {
  return (
    <Card
      style={{ height: "400px", borderRadius: "15px", width: "100%" }}
      elevation={6}
    >
      <Skeleton animation="wave" variant="rect" width="100%" height={170} />
      <div style={{ marginLeft: "20px" }}>
        <div style={{ display: "flex" }}>
          <Skeleton variant="text" width={40} style={{ marginTop: "20px" }} />
          <Skeleton
            variant="text"
            width={50}
            style={{ marginLeft: "10px", marginTop: "20px" }}
          />
        </div>
        <Skeleton
          animation="wave"
          variant="text"
          width="47%"
          height={45}
          style={{ marginTop: "10px" }}
        />
        <div style={{ marginTop: "20px", marginRight: "20px" }}>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" width="50%" />
        </div>
      </div>
    </Card>
  );
}

export default CardSkeleton;
