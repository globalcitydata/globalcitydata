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
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Link as MuiLink,
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

// const Tags = ({ classes, tags }) => (
//   <ExpansionPanel className={classes.ep}>
//     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//       <Typography variant="subtitle1">Tags</Typography>
//     </ExpansionPanelSummary>
//     <ExpansionPanelDetails className={classes.epDetail}>
//       {Object.entries(tags).map((tag, i) => (
//         <Fragment key={i}>
//           {Object.entries(tag[1]).map(attribute => (
//             <Chip
//               color={colors[i % colors.length]}
//               label={attribute[1]}
//               className={classes.chip}
//               key={attribute[1]}
//             />
//           ))}
//         </Fragment>
//       ))}
//     </ExpansionPanelDetails>
//   </ExpansionPanel>
// );

const Tags = ({ classes, tags }) => {
  const [expanded, setExpanded] = useState(false);
  const tagList = [];
  Object.entries(tags).forEach(tag => Object.entries(tag[1]).forEach(
      attribute => tagList.push([tag[0], attribute[1]]), // ex: ['determinants', 'environment']
    ),);
  const btnMsg = `${expanded ? '-' : '+'}`;
  return (
    <CardContent>
      <Typography variant="subtitle1">
        Tags
        {'  '}
        <ExpandBtn msg={btnMsg} setExpanded={setExpanded} classes={classes} />
      </Typography>
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

// const Summary = ({ classes, summary }) => (
//   <ExpansionPanel className={classes.ep}>
//     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//       <Typography variant="subtitle1">Summary</Typography>
//     </ExpansionPanelSummary>
//     <ExpansionPanelDetails className={classes.epDetail}>
//       <Typography paragraph>{summary}</Typography>
//     </ExpansionPanelDetails>
//   </ExpansionPanel>
// );

const ExpandBtn = ({ msg, setExpanded, classes }) => (
  <Button
    onClick={() => setExpanded(prev => !prev)}
    className={classes.expandBtn}
    disableRipple
  >
    {msg}
  </Button>
);

const Summary = ({ classes, summary }) => {
  const [expanded, setExpanded] = useState(false);
  const btnMsg = `${expanded ? '-' : '+'}`;
  return (
    <CardContent>
      <Typography variant="subtitle1">
        Summary
        {'  '}
        <ExpandBtn msg={btnMsg} setExpanded={setExpanded} classes={classes} />
      </Typography>
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
