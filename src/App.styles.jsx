import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Abhaya Libre', sans-serif;
  font-family: 'StratosSkyeng', sans-serif;
  src: 
    url("../public/fonts/abhayalibre-extrabold-webfont.woff2") format("woff2"),
    url("../public/fonts/abhayalibre-extrabold-webfont.woff") format("woff"),
    url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("../public/fonts/StratosSkyeng.woff") format("woff"),
   
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'Stratos', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  font-family: 'StratosSkyeng', sans-serif;
  
  color: #ffffff;
  min-height: 100vh;
	width: 100%;
  background: #271A58;
  

}
`;
