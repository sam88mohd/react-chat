import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");

  const { room } = useSelector((state) => state);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { setRoomDetails } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setRoomName("");
    if (username === "" || roomName === "") {
      alert("Please fill up all field!");
    } else {
      setRoomDetails(username, roomName);
      navigate("/chat");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginTop: "200px" }}
      >
        JOIN
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="User name"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Room name"
              fullWidth
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3} align="center">
            <Button variant="contained" type="submit" color="primary">
              Create Room
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
