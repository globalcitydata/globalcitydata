import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const SponsorsWrapper = styled.div`
  text-align: center;
`;

const Sponsors = ({ sponsors }) => (
  <SponsorsWrapper>
    <h3>Sponsors</h3>
  </SponsorsWrapper>
);

export default Sponsors;
