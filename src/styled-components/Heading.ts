import styled from 'styled-components';

export const Heading = styled('p')<{ size: string }>`
  font-size: ${(props) => props.size};
  text-align: center;
`;

export const Centered = styled('p')<{ size: string }>`
  font-size: ${(props) => props.size};
  text-align: center;
`;
