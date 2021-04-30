import styled from 'styled-components';

// interface RatingContainerProps {}

export const EvaluatorCard = styled.div`
  background-color: #fcfaf9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid rgba(42, 70, 112, 0.1);
  img {
    border: 1px solid #131735;
    object-fit: cover;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  div:nth-child(1) {
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div:nth-child(2) {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
  }
  div:nth-child(3) {
    font-size: 14px;
    font-weight: 500;
    color: #131735;
    margin-top: 9px;
    /* font-weight: 700; */
  }
`;
