import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import Section from './section';
import Title from './title';
import Body from './body';
import Markdown from '../markdown';

const styles = {
  title: {
    marginBottom: '19px',
  },
};

const UsesAndVisualizations = ({ uav, img, classes }) => (
  <Section>
    <Title className={classes.title}>Uses and Visualizations</Title>
    <Body>
      <Markdown>{uav}</Markdown>
      {img && <Img fixed={img.fixed} />}
    </Body>
  </Section>
);

export default withStyles(styles)(UsesAndVisualizations);
