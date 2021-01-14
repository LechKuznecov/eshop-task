import styled from "styled-components";

export const Cart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cartBackground};
  min-height: 100vh;
  -webkit-box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.lightGrey};
  padding: 0.5em;
`;

export const BuyBlock = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  padding: 2em;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const FullPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallHeader = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: smaller;
  margin: 0;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.dark};
  font-weight: 600;
  margin: 0;
`;

export const Span = styled.span`
  cursor: help;
`;