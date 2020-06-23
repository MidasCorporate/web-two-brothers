import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px 0;

  h3 {
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
  }
`;

export const ImgComp = styled.img``;

export const Content = styled.div`
  width: 90%;
  height: 600px;

  .carousel .slide {
    background: #333;

    .slide {
      height: 600px;
    }
  }
`;

// export const Content = styled.div`
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: center;

//   /* @media (max-width: 768px) {
//     height: 300px;
//   } */

//   .carousel-root {
//     /* display: flex; */
//     width: 90%;
//     /* height: 600px; */

//     /* align-items: center; */
//     /* justify-content: center; */
//     /* background-size: 100%; */

//     /* background: #333 no-repeat scroll 0 0;
//     background-size: cover; */

//     .carousel {
//       /* display: flex; */
//       /* width: 100%; */
//       /* flex: 1; */
//       /* align-items: center;
//       justify-content: center; */
//     }

//     /* .carousel {
//       height: 600px;
//     }

//     .slider-wrapper {
//       height: 600px;
//     }

//     .slider {
//       height: 600px;
//     }

//     .slide {
//       height: 600px;

//     } */
//     /* img {
//       background-size: 100%;
//     } */
//   }

//   @media (max-width: 425px) {
//     height: 300px;
//   }

//   .slide {
//     min-width: 100%;
//     height: auto;
//   }

//   /* button {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 5%;
//     height: 78vh;
//     background: none;
//     border: none;
//     outline: none;
//     transition: 0.9s;
//     cursor: pointer;

//     @media (max-width: 768px) {
//       width: 10%;
//     }

//     :hover {
//       background: rgba(51, 51, 51, 0.5);

//       svg {
//         color: #999;
//       }
//     }

//     svg {
//       color: #fff;
//     }
//   }

//   #goLeft {
//     left: 0;
//   }

//   #goRight {
//     right: 0;
//   } */
// `;
