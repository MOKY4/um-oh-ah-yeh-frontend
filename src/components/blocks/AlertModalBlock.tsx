import React from "react";
import * as AM from "@styles/AlertModalStyle";
import AlertImg from "@assets/images/alertimage.png";
import { useRecoilState } from "recoil";
import { alertModal } from "atoms/ModalStates";

const AlertModal = () => {
  const [, setAlertModal] = useRecoilState(alertModal);
  const alertModalHander = () => {
    setAlertModal(false);
  };
  return (
    <AM.ModalBackground>
      <AM.ModalWrapper>
        <AM.ModalAlertImg src={AlertImg} alt="" />
        <AM.ModalAlertText>
          한 번 고른 항목은 바꿀 수 없어요
          <br />
          <AM.BlueText>다시하기</AM.BlueText>를 눌러주세요!
        </AM.ModalAlertText>
        <AM.ModalCloseButton onClick={alertModalHander}>
          확인
        </AM.ModalCloseButton>
      </AM.ModalWrapper>
    </AM.ModalBackground>
  );
};

export default AlertModal;
