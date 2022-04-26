import React from "react";
import styled from "styled-components";
import { Link } from "../../../components/Link";

const StyledContainer = styled(Link)`
  cursor:pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 12px;
  >svg {
    fill: ${({ theme }) => theme.colors.venom2};
    flex-shrink: 0;
    margin-right: 7px;
  }
  >span {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.tresdin};
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 16px;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 50px;
  }
  :hover {
    text-decoration:none;
  }
`;

const AuditCheck = ({ }) => {
  return (
    <StyledContainer>
      <svg viewBox="0 0 24 24" color="success" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.032 7.032 3 12 3C16.968 3 21 7.032 21 12C21 16.968 16.968 21 12 21C7.032 21 3 16.968 3 12ZM9.99998 14.17L15.88 8.29C16.27 7.9 16.91 7.9 17.3 8.29C17.69 8.68 17.69 9.31 17.3 9.7L10.71 16.29C10.32 16.68 9.68998 16.68 9.29998 16.29L6.70998 13.7C6.31998 13.31 6.31998 12.68 6.70998 12.29C7.09998 11.9 7.72998 11.9 8.11998 12.29L9.99998 14.17Z"></path></svg>
      <span>Doxxed Audit</span>
    </StyledContainer>
  );
};

export default React.memo(AuditCheck);
