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
  height: 80px;

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
    margin-bottom: 16px;
  }

  > p {
    margin-bottom: 40px;
    color: #777;
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

  > select {
    margin-top: 8px;
    border-radius: 8px;
    height: 40px;
    padding: 0 24px;
    background: #fff;
    border: 1px solid #eee;
    margin: 8px 0 20px 0;
    cursor: pointer;
  }
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
  color: #fff;
  background: var(--primary);
  cursor: pointer;

  > svg {
    margin-right: 10px;
  }
`;
