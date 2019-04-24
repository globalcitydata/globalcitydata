import React from "react";
import Img from "gatsby-image";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Container from "../container";

const styles = {
  title: {
    paddingBottom: "1rem",
  },
};

const Sponsors = ({ sponsors, classes }) => (
  // console.log(sponsors);
  <Container>
    <Typography variant="h4" className={classes.title}>
      Developed with support from
    </Typography>
    <Grid container spacing={24}>
      {sponsors.map((img, i) => (
        <Grid item key={i}>
          <Img fixed={img.fixed} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
export default withStyles(styles)(Sponsors);
