import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MyButton = styled.button`
  background: lightblue;
  border-radius: 15px;
`;

export const ContainedButton = (props) => {
  const { label, href } = props;
  return (
    <Link to={href}>
      <MyButton>{label}</MyButton>
    </Link>
  );
};

export const TextButton = (props) => {
  const { label, href } = props;
  return (
    <Link to={href}>
      <MyButton>{label}</MyButton>
    </Link>
  );
};
