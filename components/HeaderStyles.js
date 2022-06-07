import styled, { css } from 'styled-components'
import Link from 'next/link';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  flex: none; 
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80px;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;