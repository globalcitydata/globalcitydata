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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import TagChips from '../../tagChips';
import { getDataObjFromHit } from '../dataUtils';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
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
    <ExpandMoreIcon />
  </IconButton>
);

const Title = ({
 title, expanded, setExpanded, classes 
}) => (
  <Typography variant="subtitle1">
    {title}
    <ExpandBtn
      setExpanded={setExpanded}
      classes={classes}
      expanded={expanded}
    />
  </Typography>
);

const Tags = ({ classes, tags }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <CardContent>
      <Title
        title="Tags"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      <Collapse in={expanded} collapsedHeight="80px">
        <TagChips tags={tags} />
      </Collapse>
    </CardContent>
  );
};

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <CardContent>
      <Title
        title="Summary"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      <Collapse in={expanded} collapsedHeight="100px">
        <Typography variant="caption">{summary}</Typography>
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
