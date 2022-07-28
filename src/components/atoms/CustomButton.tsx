import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface Props {
  children: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
}

function CustomButton(props: Props) {
  return <Button {...props}>{props.children}</Button>;
}

export default CustomButton;

const Button = styled.div<Props>`
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  width: ${({ width }) => (width ? width + 'rem' : '10rem')};
  height: ${({ height }) => (height ? height + 'rem' : '4rem')};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'var(--color-dark-6)'};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'rem' : '1.5rem')};
  color: ${({ textColor }) => (textColor ? textColor : 'white')};

  &:hover {
    transform: scale(0.98);
  }
`;
