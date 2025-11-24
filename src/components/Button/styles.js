import styled from 'styled-components';

export const Button = styled.button`
  
  background-color: ${props => props.theme === 'primary' ? '#fe7e5d'
    : 'transparent'};
  border: none;
  width: ${props => props.theme === 'primary' ? '40%' : ' 32%;'};
  height: 40px;
  border: ${props => props.theme === 'primary' ? '1px solid #fe7e5d'
    : '1px solid #fff'};
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme === 'primary' ? '#ff6b6b'
    : '#fff'};
  }

  &:active {
    background-color: ${props => props.theme === 'primary' ? '#e65c3c'
    : '#ffffffcb'};
  }
  `
