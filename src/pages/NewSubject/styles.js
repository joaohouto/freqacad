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
  padding: 20px 5%;

  > h1 {
    margin-bottom: 40px;
  }

  > section {
    margin-bottom: 40px;

    > label {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 500;
      color: #999;
      margin-bottom: 8px;
    }
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
