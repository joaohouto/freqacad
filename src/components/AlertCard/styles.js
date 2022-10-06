import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
  padding: 20px;
  background: #fafafa;
  border-radius: 20px;
  margin-bottom: 20px;

  > div {
    > h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }

    > p {
      line-height: 150%;
      font-size: 14px;
      color: #777;
    }
  }
`;

const cardTypes = {
  fine: {
    color: "var(--success)",
    background: "var(--success-transparent)",
  },
  warning: {
    color: "var(--warning)",
    background: "var(--warning-transparent)",
  },
  flunked: {
    color: "var(--danger)",
    background: "var(--danger-transparent)",
  },
  passed: {
    color: "var(--success)",
    background: "var(--success-transparent)",
  },
};

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;
  border-radius: 8px;
  color: ${(props) => cardTypes[props.type].color};
  background: ${(props) => cardTypes[props.type].background};
`;
