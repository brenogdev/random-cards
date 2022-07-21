import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
`;
