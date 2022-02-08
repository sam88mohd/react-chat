import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const LoginForm = () => {
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
      <form>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12} sm={6}>
            <TextField variant="filled" label="User name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="filled" label="Room name" fullWidth />
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
