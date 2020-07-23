import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Section = styled.div`
  border: 1px solid grey;
  padding: 47px 28px 47px 17px;
  border-radius: 4px;
  width: 500px;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 10px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid grey;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
 color: white;
 background: brown;
 padding: 14px 20px;
 margin: 8px 0;
 height: 40px;
 border: none;
 cursor: pointer;
 width: 150px;
 ${props =>
  props.disabled &&
  css`
    cursor: not-allowed;
  `};
`;
