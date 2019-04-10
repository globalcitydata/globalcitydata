import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// General Components
import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getDataObjFromHit } from '../dataUtils';

const styles = theme => ({
  ep: {
    margin: 0,
    borderRadius: 'inherit',
  },
  epDetail: {
    display: 'inherit',
  },
  chip: {
    margin: '0 10px 10px 0',
  },
  actionWrapper: {
    paddingTop: '4rem',
  },
  action: {
    position: 'absolute',
    bottom: '0.6rem',
  },
});

const colors = ['primary', 'secondary', 'default'];

const Tags = ({ classes, tags }) => (
  <ExpansionPanel className={classes.ep}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="subtitle1">Tags</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className={classes.epDetail}>
      {Object.entries(tags).map((tag, i) => (
        <Fragment key={i}>
          {Object.entries(tag[1]).map(attribute => (
            <Chip
              color={colors[i % colors.length]}
              label={attribute[1]}
              className={classes.chip}
              key={attribute[1]}
            />
          ))}
        </Fragment>
      ))}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const Summary = ({ classes, summary }) => (
  <ExpansionPanel className={classes.ep}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="subtitle1">Summary</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className={classes.epDetail}>
      <Typography paragraph>{summary}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    <Grid item xs={12} md={6}>
      <Card className={`${classes.card} lift`}>
        <CardContent>
          <Typography variant="h6">{dataObj.title}</Typography>
        </CardContent>
        <Summary summary={dataObj.summary} classes={classes} />
        <Tags tags={dataObj.tags} classes={classes} />
        <CardActions className={classes.actionWrapper}>
          <Button
            color="primary"
            component={Link}
            to={`/data/${dataObj.slug}/`}
            className={classes.action}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(Hit);
