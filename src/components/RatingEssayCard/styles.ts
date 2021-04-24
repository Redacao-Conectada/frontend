import styled from 'styled-components';

// interface RatingContainerProps {}

export const HeaderContainer = styled.div`
  background-color: #fcfaf9;
  margin: 36px 0px 0px 0px;
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
    width: 314px;
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

export const RatingTable = styled.table`
  width: 314px;
  background-color: #ffffff;
  margin-top: 12px;
  border-collapse: collapse;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  th {
    font-size: 14px;
    height: 41px;
    padding: 12px;
    border-right: 1px solid #e1e2ea;
    border-left: 1px solid #e1e2ea;
    border-top: 1px solid #e1e2ea;
    border-bottom: 1px solid #e1e2ea;
    background-color: #f5f5f5;
    font-family: 'Montserrat';
  }
  th:nth-child(1) {
    text-align: center;
    width: 350px;
  }
  th:nth-child(2) {
  }
  td {
    font-size: 14px;
    font-weight: 700;
    border-right: 1px solid rgba(209, 210, 218, 0.6);
    border-left: 1px solid rgba(209, 210, 218, 0.6);
    border-top: 1px solid rgba(209, 210, 218, 0.6);
    border-bottom: 1px solid rgba(209, 210, 218, 0.6);
    vertical-align: center;
    /* position: relative; */
  }
  td:nth-child(1) {
    font-family: 'Open Sans';
    padding: 10px 0px;
    text-align: center;
  }
  td:nth-child(2) {
    font-family: 'Open Sans';
    padding-right: 12px;
    text-align: right;
  }
  td:nth-child(3) {
    font-family: 'Montserrat';
    font-size: 13px;
    font-weight: 600;
    text-align: left;
    padding: 10px 5px 10px 10px;
    border-right: 1px solid rgba(42, 70, 112, 0.1);
  }
  div {
    font-family: 'Open Sans';
    font-size: 10px;
    color: #898c9b;
  }
  .totalNumber {
    font-family: 'Open Sans';
    font-size: 18px;
    text-align: center;
    padding-top: 6px;
    height: 49px;
    color: #398ecc;
  }
`;

export const RatingContainer = styled.div``;
