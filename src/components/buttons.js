import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledContainedLink = styled(Link)`
  background: white;
  color: red;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;

  position: relative;
  top: 0;
  transition: top ease 0.2s;
  :hover {
    top: -2px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const StyledTextLink = styled(Link)`
  background: white;
  color: red;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
`;

export const ContainedButton = (props) => {
  const { label, href } = props;
  return <StyledContainedLink to={href}>{label}</StyledContainedLink>;
};

export const TextButton = (props) => {
  const { label, href } = props;
  return <StyledTextLink to={href}>{label}</StyledTextLink>;
};
