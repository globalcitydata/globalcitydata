import React, { useState } from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// General Components
import {
  Grid,
  Divider,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Collapse,
} from '@material-ui/core';

import { getDataObjFromHit } from '../dataUtils';

const styles = {
  card: {
    height: '100%',
    position: 'relative',
  },
  title: {
    marginBottom: '1rem',
  },
  content: {
    paddingTop: '1rem',
    paddingBottom: '4rem',
  },
  chip: {
    margin: '0 10px 10px 0',
  },
  action: {
    position: 'absolute',
    bottom: '0.6rem',
  },
};

const colors = ['primary', 'secondary', 'default'];

const Tags = ({ classes, tags }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      {/* <Collapse expanded={expanded.toString()}> */}
      <>
        {Object.entries(tags).map((tag, i) => (
          <div key={i}>
            {Object.entries(tag[1]).map(attribute => (
              <Chip
                color={colors[i % colors.length]}
                label={attribute[1]}
                className={classes.chip}
                key={attribute[1]}
              />
            ))}
          </div>
        ))}
        {/* <Chip label="Example tag" className={classes.chip} />
    <Chip color="primary" label="Another one" className={classes.chip} />
    <Chip color="secondary" label="one more baby" /> */}
        {/* </Collapse> */}
      </>
    </div>
  );
};

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Collapse expanded={expanded.toString()}>
        <Typography variant="body2">{summary}</Typography>
      </Collapse>
    </div>
  );
};

const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  // console.log(dataObj);
  return (
    <Grid item xs={12} md={6}>
      <Card className={`${classes.card} lift`}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            {dataObj.title}
          </Typography>
          <Divider />
          <div className={classes.content}>
            <Tags tags={dataObj.tags} classes={classes} />
            <Summary summary={dataObj.summary} classes={classes} />
          </div>
        </CardContent>
        <CardActions>
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
