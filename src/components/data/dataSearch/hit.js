import React, { useState } from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// General Components
import {
  Divider,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classnames from 'classnames';
import TagChips from '../../tagChips';
import { getDataObjFromHit } from '../dataUtils';

const styles = theme => ({
  card: {},
  content: {
    position: 'relative',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    position: 'absolute',
    bottom: '-5px',
    right: '-5px',
    color: 'red',
    '&:hover': {
      color: 'maroon',
      background: 'none',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandBtn: {
    color: 'red',
    fontSize: '1rem',
    justifyContent: 'end',
    '&:hover': {
      backgroundColor: 'white',
      textDecoration: 'underline',
    },
  },
  actionWrapper: {
    paddingTop: '3rem',
  },
  action: {
    position: 'absolute',
    bottom: '0.6rem',
  },
});

const ExpandBtn = ({ expanded, setExpanded, classes }) => (
  <IconButton
    className={classnames(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={() => setExpanded(prev => !prev)}
    aria-expanded={expanded}
    aria-label="Show more"
  >
    {!expanded ? <AddIcon fontSize="small" /> : <RemoveIcon fontSize="small" />}
  </IconButton>
);

const Title = ({ title, classes }) => (
  <Typography variant="subtitle1" gutterBottom>
    {title}
  </Typography>
);

const Tags = ({ classes, tags }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <CardContent className={classes.content}>
      <Title title="Tags" />
      <Collapse in={expanded} collapsedHeight="80px">
        <TagChips tags={tags} />
        <ExpandBtn
          setExpanded={setExpanded}
          classes={classes}
          expanded={expanded}
        />
      </Collapse>
    </CardContent>
  );
};

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <CardContent className={classes.content}>
      <Title
        title="Summary"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      <Collapse in={expanded} collapsedHeight="100px">
        <Typography variant="caption">{summary}</Typography>
        <ExpandBtn
          setExpanded={setExpanded}
          classes={classes}
          expanded={expanded}
        />
      </Collapse>
    </CardContent>
  );
};

const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  return (
    <Grid item xs={12} md={6}>
      <Card className={`${classes.card} lift`}>
        <CardContent>
          <Typography variant="h6">{dataObj.title}</Typography>
        </CardContent>
        <Divider />
        <Summary summary={dataObj.summary} classes={classes} />
        <Divider />
        <Tags tags={dataObj.tags} classes={classes} />
        <Divider />
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
