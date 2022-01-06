import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    margin: "30px 0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  heading: {
    color: "#00996f",
  },
  image: {
    marginLeft: 20,
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
