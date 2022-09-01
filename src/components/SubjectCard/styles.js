import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
  background: #fafafa;
  border-radius: 20px;
  border: 1px solid #eee;
  margin-bottom: 20px;
  cursor: pointer;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > strong {
      font-size: 16px;
      font-weight: 500;
    }

    > svg {
      color: #999;
    }
  }

  > section:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 16px;
  }
`;

export const ProgressBar = styled.div`
  > span {
    font-weight: 500;
    padding: 3px 5px;
    border-radius: 8px;
    font-size: 14px;
    color: ${(props) =>
      props.type === "presence" ? "var(--success)" : "var(--danger)"};
    background: ${(props) =>
      props.type === "presence"
        ? "var(--success-transparent)"
        : "var(--danger-transparent)"};
  }

  > div {
    margin-top: 8px;
    height: 5px;
    width: 100%;
    background: #f1f1f1;
    border-radius: 3px;

    > div {
      height: 5px;
      background: ${(props) =>
        props.type === "presence" ? "var(--success)" : "var(--danger)"};
      border-radius: 3px;
    }
  }
`;
