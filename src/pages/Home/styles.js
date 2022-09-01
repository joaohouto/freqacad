import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #3277e0;
  padding: 20px 5%;

  > img {
    height: 40px;
  }
`;

export const Content = styled.div`
  padding: 20px 5%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 100%;
  border-radius: 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: #777;
  background: #f1f1f1;
  cursor: pointer;

  > svg {
    margin-right: 10px;
  }
`;
