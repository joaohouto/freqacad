import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      display: inline-block;
      margin-bottom: 8px;
    }
  }
`;

export const Details = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const ProgressBar = styled.div`
  background: #f1f1f1;
  height: 50px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 8px;

  > div:first-child {
    height: 50px;
    width: 0;
    background: ${(props) =>
      props.type === "presence" ? "var(--success)" : "var(--danger)"};
    border-radius: 8px;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    padding: 16px;
    position: absolute;
    top: 0;
    left: 0;

    > span {
      padding: 3px 5px;
      border-radius: 8px;
      font-weight: 500;
      color: #fff;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
