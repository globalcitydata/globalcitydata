import React, { useState, Fragment } from 'react';
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
  Chip,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
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
  chip: {
    margin: '0 10px 10px 0',
  },
  actionWrapper: {
    paddingTop: '3rem',
  },
  action: {
    position: 'absolute',
    bottom: '0.6rem',
  },
});

const colors = {
  dataType: 'primary',
  determinants: 'secondary',
  sectors: 'default',
  spatialScales: 'primary',
  temporalScales: 'secondary',
  worldRegions: 'default',
};

// <Button
//   onClick={() => setExpanded(prev => !prev)}
//   className={classes.expandBtn}
//   disableRipple
// >
//   {msg}
// </Button>

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
  const tagList = [];
  Object.entries(tags).forEach(tag => Object.entries(tag[1]).forEach(
      attribute => tagList.push([tag[0], attribute[1]]), // ex: ['determinants', 'environment']
    ),);
  return (
    <CardContent>
      <Title
        title="Tags"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      {!expanded ? (
        <>
          {tagList.slice(0, 3).map(chipTag => (
            <Chip
              color={colors[chipTag[0]]}
              label={chipTag[1]}
              className={classes.chip}
              key={chipTag[1]}
            />
          ))}
        </>
      ) : (
        <>
          {tagList.map(chipTag => (
            <Chip
              color={colors[chipTag[0]]}
              label={chipTag[1]}
              className={classes.chip}
              key={chipTag[1]}
            />
          ))}
        </>
      )}
    </CardContent>
  );
};

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  const btnMsg = `${expanded ? '-' : '+'}`;
  return (
    <CardContent>
      <Title
        title="Summary"
        setExpanded={setExpanded}
        classes={classes}
        expanded={expanded}
      />
      {!expanded ? (
        <>
          <Typography variant="caption">
            {`${summary.slice(0, 150)} ...`}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="caption">{summary}</Typography>
        </>
      )}
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
