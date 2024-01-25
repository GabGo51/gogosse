// import React from "react";
// import styled from "styled-components";

// import img1 from "./img/img1.webp";
// import img2 from "./img/img2.webp";
// import img3 from "./img/img3.webp";
// import img4 from "./img/img4.webp";
// import img5 from "./img/img5.webp";
// import img6 from "./img/img6.webp";
// import img7 from "./img/img7.webp";
// import img8 from "./img/img8.webp";
// import img9 from "./img/img9.webp";
// import img10 from "./img/img10.webp";
// import img11 from "./img/img11.webp";
// import img12 from "./img/img12.webp";
// import img13 from "./img/img13.webp";
// import img14 from "./img/img14.webp";
// import img15 from "./img/img15.webp";
// import img16 from "./img/img16.webp";
// import img17 from "./img/img17.webp";
// import img18 from "./img/img18.webp";
// import img19 from "./img/img19.webp";
// import img20 from "./img/img20.webp";
// import img21 from "./img/img21.webp";
// import img22 from "./img/img22.webp";
// import img23 from "./img/img23.webp";
// import img24 from "./img/img24.webp";

// const EspaceFine = () => {
//   const pages = [
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//     img13,
//     img14,
//     img15,
//     img16,
//     img17,
//     img18,
//     img19,
//     img20,
//     img21,
//     img22,
//     img23,
//     img24,
//   ];
//   return (
//     <Container>
      
//       <img className="fullscreen" src={img1} />
//       <div className="section1">
//         <img className="big" src={img2} />
//         <img className="small" src={img3} />
//       </div>
//       <img className="fullscreen" src={img4} />
//       <div className="section2">
//         <img src={img5} />
//       </div>
//       <div className="section3">
//         {pages.map((page, index) => (
//           <img key={index} src={page} />
//         ))}
//       </div>
//     </Container>
//   );
// };

// const Container = styled.div`
//   .fullscreen {
//     width: 100vw;
//     margin-top: 100px;

//     @media (max-width: 1100px) {
//       margin-top: 50px;
//     }
//   }

//   .section1 {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-wrap: nowrap;
//     margin-top: 100px;

//     img {
//       margin-right: 10px;
//       max-height: 800px;
//     }
//     .big {
//       width: 40%;
//     }
//     .small {
//       width: 31.55%;
//     }
//     @media (max-width: 1100px) {
//       margin-top: 50px;
//     }
//   }

//   .section2 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 100px 0px;
//     img {
//       width: 80%;
//     }

//     @media (max-width: 1100px) {
//       margin: 50px 0;
//     }
//   }

//   .section3 {
//     background-color: #161616;
//     display: flex;
//     flex-wrap: wrap;
//     padding: 50px;
//     gap: 20px;
//     align-items: center;
//     justify-content: center;
//     img{
//       width: 45%;
//       box-sizing: border-box;
//     }
//   }
// `;

// export default EspaceFine;
