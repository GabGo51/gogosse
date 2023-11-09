import { createGlobalStyle } from "styled-components";
import Woke from "./fonts/tagada.otf";
import Authentic60 from "./fonts/AUTHENTICSans-60.otf";
import Authentic90 from "./fonts/AUTHENTICSans-90.otf";
import Authentic130 from "./fonts/AUTHENTICSans-130.otf";
import Authentic150 from "./fonts/AUTHENTICSans-150.otf";

import Authentic130C from "./fonts/AUTHENTICSans-Condensed-130.otf";
import Authentic150C from "./fonts/AUTHENTICSans-Condensed-150.otf";
import Authentic60C from "./fonts/AUTHENTICSans-Condensed-60.otf";
import Authentic90C from "./fonts/AUTHENTICSans-Condensed-90.otf";

export default createGlobalStyle`

  @font-face {
      font-family: Tagada;
      src: url(${Woke});
  }

  @font-face {
      font-family: Authentic60;
      src: url(${Authentic60});
  }
  @font-face {
      font-family: Authentic90;
      src: url(${Authentic90});
  }
  @font-face {
      font-family: Authentic130;
      src: url(${Authentic130});
  }
  @font-face {
      font-family: Authentic150;
      src: url(${Authentic150});
  }
  
  @font-face {
        font-family: Authentic60C;
        src: url(${Authentic60C});
    }
  @font-face {
      font-family: Authentic90C;
      src: url(${Authentic90C});
  }
  @font-face {
      font-family: Authentic130C;
      src: url(${Authentic130C});
  }
  @font-face {
      font-family: Authentic150C;
      src: url(${Authentic150C});
  }
  
  



  ::-webkit-scrollbar {display:none;} //hide scroll bar 

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    cursor: none;
    
  }
  
  

  
  html, body {
    width: 100vw;
    padding: 100px;
    overflow: hidden;
    overflow-y: scroll;
    background-color:#DCDCDC;
    box-sizing: content-box; 
  }
  
  


  

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  
`;
