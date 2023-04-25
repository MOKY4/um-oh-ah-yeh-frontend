import React from "react";
import * as CM from "@styles/CopyModalStyle";
import copyImage from "@assets/images/copyimage.png";
import { useRecoilState } from "recoil";
import { copyModalState, copyModalisFirst } from "atoms/ModalStates";

const CopyModal = () => {
  const [, setCopyModal] = useRecoilState(copyModalState);
  const [, setCopyFirst] = useRecoilState(copyModalisFirst);
  const copyModalHander = () => {
    setCopyModal(false);
    setCopyFirst(false);
  };
  return (
    <CM.ModalBackground>
      <CM.ModalWrapper>
        <CM.ModalCopyImg src={copyImage} alt="" />
        <CM.ModalCopyText>
          클립보드에 복사되었습니다!
          <br />
          성공적인 글쓰기를 응원해요
        </CM.ModalCopyText>
        <CM.ModalCloseButton onClick={copyModalHander}>
          확인
        </CM.ModalCloseButton>
      </CM.ModalWrapper>
    </CM.ModalBackground>
  );
};

export default CopyModal;
