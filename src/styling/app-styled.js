import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    font-family: sans-serif;
    font-weight: 700;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  font-size: 1.3rem;
`;
export const StyledLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: Black;
  font-weight: 500;
  letter-spacing: 2px;
  outline: none;
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
`;
export const formWrapper =styled.div`
  display : flex;
  height : 50%;
  width : 50%;
  background-color : 'blue'
`;
