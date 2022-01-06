import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

// internal imports
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Ceator"
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              creator: e.target.value,
            }))
          }
          value={postData.creator}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          value={postData.title}
          style={{ marginBottom: "10px" }}
          fullWidth
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              message: e.target.value,
            }))
          }
          value={postData.message}
          style={{ marginBottom: "10px" }}
          fullWidth
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              tags: e.target.value.split(","),
            }))
          }
          value={postData.tags}
          style={{ marginBottom: "10px" }}
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData((prevState) => ({
                ...prevState,
                selectedFile: base64,
              }))
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
