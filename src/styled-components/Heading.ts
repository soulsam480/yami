import styled from 'styled-components';

export const Heading = styled('p')<{ size: string; isCenter?: boolean }>`
  font-size: ${(props) => props.size};
  text-align: ${(props) => (props.isCenter ? 'center' : 'inherit')};
`;

export const Centered = styled('p')<{ size: string }>`
  font-size: ${(props) => props.size};
  text-align: center;
`;
