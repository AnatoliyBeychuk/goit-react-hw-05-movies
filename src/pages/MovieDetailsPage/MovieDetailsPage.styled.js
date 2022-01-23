import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

export const GenresContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Genre = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const MoviImg = styled.img`
  display: block;
  width: 250px;
  height: auto;
  margin: 10px 0;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
