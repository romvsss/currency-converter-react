import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  background-image: url(https://github.com/romvsss/currencyConverter/blob/master/background/pexels-pixabay-47344.jpg?raw=true);
}
`;

export const Footer = styled.footer`
  text-align: center;
  color: white;
  text-shadow: 
    -1px -1px 0 #000000ff,
     1px -1px 0 #000000ff,
    -1px  1px 0 #000000ff,
     1px  1px 0 #000000ff;
`;