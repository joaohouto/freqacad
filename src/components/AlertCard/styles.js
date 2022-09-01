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

const cardColors = {
  fine: "var(--success)",
  warning: "var(--alert)",
  danger: "var(--warning)",
  good: "var(--succes)",
};

const cardTransparentColors = {
  fine: "var(--success-transparent)",
  warning: "var(--alert-transparent)",
  danger: "var(--warning-transparent)",
  good: "var(--succes-transparent)",
};

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;
  border-radius: 8px;
  color: ${(props) => cardColors[props.type]};
  background: ${(props) => cardTransparentColors[props.type]};
`;
