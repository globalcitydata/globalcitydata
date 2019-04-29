import React, { Component, useState } from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { camelCase } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Hidden,
  Divider,
} from '@material-ui/core';
import { Element } from 'react-scroll';
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

const styles = theme => ({
  tagSections: {
    background: theme.palette.background.paper,
  },
  intro: {
    textAlign: 'center',
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '25px auto',
  },
  tagTitle: {
    marginBottom: '30px',
  },
  tagDescription: {
    maxWidth: '800px',
    paddingBottom: '1.5rem',
  },
  tabs: {
    justifyContent: 'center',
  },
  section: {
    padding: '3rem 1rem',
  },
  heroWrapper: {
    position: 'relative',
  },
  imgWrapper: {
    maxHeight: '200px',
    filter: 'brightness(60%)',
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
});

const TagPicture = ({ instance, tagTitle, classes }) => {
  const [hover, setHover] = useState(false);
  const { title, description, fixed } = instance;
  let formattedTitle = title.split('_');
  formattedTitle.shift();
  formattedTitle = formattedTitle.join(' ');
  // handle click event
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/data/', {
      replace: true,
      state: {
        attr: camelCase(tagTitle),
        refinement: [formattedTitle],
      },
    });
  };
  return (
    <Grid item s={12} m={6} l={4}>
      {/* eslint-disable */}
      <div
        className={`${classes.heroWrapper} lift`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
      >
        {/* eslint-disable */}
        <div className={classes.imgWrapper}>
          <Img fixed={fixed} className={classes.img} />
        </div>
        <div className={classes.contentWrapper}>
          {hover && description ? (
            <Typography variant="body2" color="inherit">
              {description}
            </Typography>
          ) : (
            <Typography variant="body1" color="inherit">
              {transformText(title)}
            </Typography>
          )}
        </div>
      </div>
    </Grid>
  );
};

const TagSection = ({ tag, classes }) => {
  const { title, description, associatedPictures } = tag;
  return (
    <div className={classes.section}>
      <Typography variant="h3" className={classes.tagTitle}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.tagDescription}>
        {description}
      </Typography>
      <Grid container spacing={32}>
        {associatedPictures.map(instance => (
          <TagPicture
            instance={instance}
            tagTitle={title}
            key={instance.title}
            classes={classes}
          />
        ))}
      </Grid>
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
        {/* Dumb Trick to display responsive tabs */}
        <Hidden smUp>
          <Tabs
            indicatorColor="primary"
            variant="scrollable"
            value={tab}
            onChange={this.handleChange}
            className={classes.tabs}
          >
            {sections.map(({ node: tag }) => (
              <Tab key={tag.title} label={tag.title} />
            ))}
          </Tabs>
        </Hidden>
        <Hidden xsDown>
          <Tabs
            indicatorColor="primary"
            centered
            value={tab}
            onChange={this.handleChange}
            className={classes.tabs}
          >
            {sections.map(({ node: tag }) => (
              <Tab key={tag.title} label={tag.title} />
            ))}
          </Tabs>
        </Hidden>
        {/* End really dumb tab trick */}
        <>
          {sections.map(({ node: tag }, i) => (
            <div key={tag.title}>
              {i === tab && <TagSection tag={tag} classes={classes} />}
            </div>
          ))}
        </>
      </>
    );
  }
}

const Intro = ({ intro, classes }) => (
  <Markdown className={classes.intro}>{intro}</Markdown>
);

const Tags = ({ intro, sections, classes }) => (
  <Element name="tagSections">
    <div className={classes.tagSections}>
      <Container>
        <Intro intro={intro} classes={classes} />
      </Container>
      <Divider />
      <Container>
        <TagSections sections={sections} classes={classes} />
      </Container>
    </div>
  </Element>
);

export default withStyles(styles)(Tags);
