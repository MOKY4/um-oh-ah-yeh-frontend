import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  left: 0rem;
  top: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 600rem;
  height: 350rem;
  background: #ffffff;
  box-shadow: 5rem 5rem 30rem rgba(0, 0, 0, 0.3);
  border-radius: 15rem;
`;

export const ModalAlertImg = styled.img`
  width: 133.59rem;
  height: 110rem;
  margin-top: 44.5rem;
  margin-bottom: 30rem;
`;

export const ModalAlertText = styled.span`
  width: 206rem;
  height: 46rem;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 23rem;
  /* or 144% */

  text-align: center;

  /* GRAY 03 */

  color: #424242;
  margin-bottom: 30rem;
`;

export const BlueText = styled.span`
  color: #3a79e3;
`;

export const ModalCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 155rem;
  height: 45rem;

  /* SUB COLOR 02 */

  background: #3a79e3;
  border-radius: 10rem;

  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 23rem;
  /* identical to box height, or 144% */

  text-align: center;

  /* GRAY 00 */

  color: #ffffff;
  cursor: pointer;
`;
