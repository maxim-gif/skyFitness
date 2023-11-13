import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng', sans-serif;
    url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("../public/fonts/StratosSkyeng.woff") format("woff"),

}

@font-face {
    font-family: 'abhaya_libre';
    src: url('../public/fonts/abhayalibre-extrabold-webfont.woff2') format('woff2'),
   url('../public/fonts/abhayalibre-extrabold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

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
