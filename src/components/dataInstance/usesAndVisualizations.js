import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import Section from './section';
import Title from './title';
import Body from './body';
import Markdown from '../markdown';
import FluidImage from '../fluidImage';

const styles = {
  title: {
    marginBottom: '19px',
  },
};

const UsesAndVisualizations = ({ uav, img, classes }) => (
  <Section>
    <Title className={classes.title}>Uses and Visualizations</Title>
    <Body>
      <Markdown style={{ overflowWrap: 'break-word' }}>{uav}</Markdown>
      {img && <FluidImage fluid={img.fluid} maxWidth="500px" />}
    </Body>
  </Section>
);

export default withStyles(styles)(UsesAndVisualizations);
