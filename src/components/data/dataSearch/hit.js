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
import { blue } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classnames from 'classnames';
import TagChips from '../../tagChips';
import { getDataObjFromHit } from '../dataUtils';

const styles = theme => ({
  card: {
  },
  // cardHover: {
  //   color: blue[500],
  // },
  cardTitle: {
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      color: blue[500],
    },
  },
  content: {
    cursor: 'pointer',
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
    color: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.secondary.dark,
      background: 'none',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  fadeOut: {
    height: '95px',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: 'linear-gradient( rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 1) 100% )',
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
    <CardContent
      onClick={() => setExpanded(!expanded)}
      className={classes.content}
    >
      <Title title="Tags" />
      <Collapse
        in={expanded}
        collapsedHeight="80px"
      >
        <TagChips tags={tags} />
        {/* <ExpandBtn
          setExpanded={setExpanded}
          classes={classes}
          expanded={expanded}
        /> */}
        <div className={classnames({ [classes.fadeOut]: !expanded })} />
      </Collapse>
    </CardContent>
  );
};

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <CardContent className={classes.content} onClick={() => setExpanded(!expanded)}>
      <Title
        title="Summary"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      <Collapse
        in={expanded}
        collapsedHeight="95px"
      >
        <Typography paragraph>
          {summary}
        </Typography>
        {/* <ExpandBtn
          setExpanded={setExpanded}
          classes={classes}
          expanded={expanded}
        /> */}
        <div className={classnames({ [classes.fadeOut]: !expanded })} />
      </Collapse>
    </CardContent>
  );
};

const Hit = ({ hit, classes }) => {
  const dataObj = getDataObjFromHit(hit);
  const [hover, setHover] = useState(false);
  return (
    <Grid item xs={12} md={6}>
      <Card
        className={`${classes.card} lift`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardContent>
          {/* <Link to={`/data/${dataObj.slug}/`}> */}
          <Typography
            variant="h6"
            className={classnames(classes.cardTitle, { [classes.cardHover]: hover })}
            component={Link}
            to={`/data/${dataObj.slug}/`}
          >
            {dataObj.title}
          </Typography>

          {/* </Link> */}
        </CardContent>
        <Divider />
        <Summary summary={dataObj.summary} classes={classes} />
        <Divider />
        <Tags tags={dataObj.tags} classes={classes} />
        {/* <Divider />
        <CardActions className={classes.actionWrapper}>
          <Button
            color="primary"
            component={Link}
            to={`/data/${dataObj.slug}/`}
            className={classes.action}
          >
            View Details
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(Hit);
