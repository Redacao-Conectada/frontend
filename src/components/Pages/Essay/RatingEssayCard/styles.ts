import styled from 'styled-components';

// interface RatingContainerProps {}

export const RatingTable = styled.table`
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

export const EmptyCommentary = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #131735;
  opacity: 0.5;
`;

export const RatingContainer = styled.div``;
