import styled from "styled-components";

export const Container = styled.button`
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
