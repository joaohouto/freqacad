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
    margin-top: 16px;
  }
`;

export const ProgressBar = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 3px;
  background: #f1f1f1;

  display: flex;

  > div {
    height: 5px;
    width: 0%;
    border-radius: 3px;
  }

  > div:first-child {
    background: var(--success);
  }

  > div:last-child {
    background: var(--danger);
  }
`;
