import { createGlobalStyle } from "styled-components";
import Woke from "./fonts/tagada.otf";
import Authentic60 from "./fonts/A60.ttf";
import Authentic90 from "./fonts/AUTHENTICSans-90.otf";
import Authentic130 from "./fonts/AUTHENTICSans-130.otf";
import Authentic150 from "./fonts/AUTHENTICSans-150.otf";
import Authentic130C from "./fonts/AUTHENTICSans-Condensed-130.otf";
import Authentic150C from "./fonts/AC150.ttf";
import Authentic60C from "./fonts/AC60.ttf";
import Authentic90C from "./fonts/AC90.ttf";


export default createGlobalStyle`

  @font-face {
      font-family: Tagada;
      src: url(${Woke});
      font-display: swap;
  }

  @font-face {
      font-family: Authentic60;
      src: url(${Authentic60});
      font-display: swap;
  }
  @font-face {
      font-family: Authentic90;
      src: url(${Authentic90});
      font-display: swap;
  }
  @font-face {
      font-family: Authentic130;
      src: url(${Authentic130});
      font-display: swap;
  }
  @font-face {
      font-family: Authentic150;
      src: url(${Authentic150});
      font-display: swap;
  }
  
  @font-face {
        font-family: Authentic60C;
        src: url(${Authentic60C});
        font-display: swap;
    }
  @font-face {
      font-family: Authentic90C;
      src: url(${Authentic90C});
      font-display: swap;
  }
  @font-face {
      font-family: Authentic130C;
      src: url(${Authentic130C});

  }
  @font-face {
      font-family: Authentic150C;
      src: url(${Authentic150C});
      font-display: swap;
  }


  
  



  ::-webkit-scrollbar {display:none;} //hide scroll bar 

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    cursor: none;
    
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

  html, body {
    width: 100vw;
    overflow: hidden;
    overflow-y: scroll;
    background-color:white;
    box-sizing: content-box; 
    
    
  }

  body[data-theme="dark"] {
    transition: 1s;
    background-color: #000000 ;
    color: #f2f2f2;
    

    
  }

  img{
    object-fit: cover;
  }

  .direction{
    width: 100%;
    padding:100px 20px;
    
    font-size: clamp(16px, 3vw, 20px);
    h3{
      font-family: Authentic130;
      margin-bottom: 20px;
    }
    p{
      font-family: Authentic60;
    }
  }

  .fullscreen-image{
    width: 100%;
  }
  

  .almost-fullscreen{
    width: 90%;
    margin-bottom: 8vw;
  }
  .middle-screen{
    width: 70%;
  }

  .right-section{
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    padding-right: 20px;
    div{
      width: 50%;
      margin-bottom: 60px;

      p{
        width: 70%;
        font-size: clamp(14px, 3vw, 18px);
        font-family:Authentic60 ;
        text-transform: uppercase;
      }
    }
    img{
      width: 80%;
    }

    @media (max-width:1100px){
      margin-top: 50px;
      div{
        width: 80%;
        p{
          width: 90%;
        }
      }
    }
  }
  
  .top-section{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95vh;

    @media (max-width:1100px){
      height: auto;
    }

  }

`;
