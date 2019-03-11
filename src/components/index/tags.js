import React, { Component } from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import {
 Typography, Grid, Tabs, Tab 
} from '@material-ui/core';
import Container from '../container';
import Markdown from '../markdown';

/**
 * Transform title of picture from contentful title
 * to title we actually want.
 *
 * Example:
 *
 * Outcome_Cities -> Cities
 */
const transformText = (oldTitle) => {
  const arr = oldTitle.split('_'); //
  arr.shift();
  return arr.join(' ');
};

const styles = {
  intro: {
    paddingTop: '4rem',
  },
  section: {
    padding: '3rem 0',
  },
  container: {
    margin: '0 auto',
    padding: '0 1rem',
    maxWidth: '900px',
  },
  heroWrapper: {
    position: 'relative',
  },
  imgWrapper: {
    maxHeight: '200px',
    filter: 'brightness(70%)',
  },
  img: {
    borderRadius: '4px',
  },
  contentWrapper: {
    position: 'absolute',
    left: '5%',
    bottom: '10%',
    padding: '0 0.5rem',
    color: 'white',
    fontSize: '1rem',
    '@media(max-width: 1400px': {
      top: '10%',
      fontSize: '0.8rem',
    },
    '@media(maxWidth: 1000px)': {
      top: '5%',
      fontSize: '0.6rem',
    },
  },
};

const TagPicture = ({ instance, classes }) => {
  const { title, fixed } = instance;
  return (
    <Grid item s={12} m={6} l={4} xl={3}>
      <div className={`${classes.heroWrapper} lift`}>
        <div className={classes.imgWrapper}>
          <Img fixed={fixed} className={classes.img} />
        </div>
        <div className={classes.contentWrapper}>
          <Typography variant="body1" color="inherit">
            {transformText(title)}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

const TagSection = ({ tag, classes }) => {
  const { title, description, associatedPictures } = tag;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle2" style={{ maxWidth: '800px' }}>
          {description}
        </Typography>
        <Grid container spacing={24}>
          {associatedPictures.map(instance => (
            <TagPicture
              instance={instance}
              key={instance.title}
              classes={classes}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

class TagSections extends Component {
  state = {
    tab: 0,
  };

  handleChange = (e, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { sections, classes } = this.props;
    const { tab } = this.state;
    return (
      <>
        <div className={classes.section}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={tab}
            onChange={this.handleChange}
            centered
          >
            {sections.map(({ node: tag }) => (
              <Tab key={tag.title} label={tag.title} />
            ))}
          </Tabs>
        </div>
        <>
          {sections.map(({ node: tag }, i) => (
            <>
              {i === tab && (
                <TagSection key={tag.title} tag={tag} classes={classes} />
              )}
            </>
          ))}
        </>
      </>
    );
  }
}

const Tags = ({ sections, intro, classes }) => (
  <>
    <div className={classes.container}>
      <Markdown className={classes.intro}>{intro}</Markdown>
    </div>
    <TagSections sections={sections} classes={classes} />
  </>
);

export default withStyles(styles)(Tags);
