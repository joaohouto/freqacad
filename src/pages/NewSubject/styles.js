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

  padding: 20px 5%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;
    border-radius: 8px;
    background: #fafafa;
    color: #222;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 16px 5%;

  > h1 {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 14px;
  }

  > input {
    margin-top: 8px;
    border-radius: 8px;
    height: 40px;
    padding: 0 24px;
    background: #fff;
    border: 1px solid #eee;
    margin: 8px 0 20px 0;
  }
`;

export const InfoCard = styled.div`
  background: #f1f1f1;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  color: #222;
  margin-bottom: 20px;

  display: flex;

  > svg {
    margin-right: 16px;
    min-width: 20px;
  }
`;
