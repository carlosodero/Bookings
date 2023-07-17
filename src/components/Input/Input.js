import styled from 'styled-components';

const Input = styled.input`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '50px'};
  background-color: ${props => props.backgroundColor || '#00B4D8'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || '1px solid'};
  border-color: ${props => props.type === 'login' ? '#00B4D8' : 'black'};
  outline: none;
  font-weight: normal;
`;

export default Input;
