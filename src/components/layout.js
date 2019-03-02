import React from 'react';
import styled from 'styled-components';

// Components
import Header from './header';

const Wrapper = styled.main`
  margin-top: 100px;
`;

export default ({ children }) => (
  <>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>
);
