import styled from "styled-components";
import Systemthumb from "@assets/images/SystemThumb.png";
import CopyImage from "@assets/images/copy.png";
import { useRecoilState } from "recoil";
import { copyModalState } from "atoms/modalstates";

interface ResponseProps {
  text: string;
  responseID: number;
}

const ResponseMessage = (props: ResponseProps) => {
  const [, setCopyModal] = useRecoilState(copyModalState);
  const CopyHandler = (id: string) => {
    var range = document.createRange();
    var copyText = document.getElementById(id);
    if (copyText) {
      range.selectNode(copyText);
    }
    window.getSelection()?.removeAllRanges(); // clear current selection
    window.getSelection()?.addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection()?.removeAllRanges(); // to deselect
    setCopyModal(true);
  };
  return (
    <MainWrapper>
      <ResponseWrapper>
        <ProfileWrapper>
          <ProfileThumb src={Systemthumb} alt="" />
          <ResponseText id={props.responseID.toString()}>
            {props.text}
          </ResponseText>
        </ProfileWrapper>
      </ResponseWrapper>
      <CopyWrapper>
        <CopyButton onClick={() => CopyHandler(props.responseID.toString())}>
          <CopyImg src={CopyImage} alt="" />
        </CopyButton>
      </CopyWrapper>
    </MainWrapper>
  );
};

export default ResponseMessage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1267rem;
  justify-content: center;
  align-items: center;
  background: #cce1ff;
  /* SUB COLOR 02 */

  border: 1.5rem solid #3a79e3;
  border-radius: 15rem;
  margin-top: 50rem;
`;

const ResponseWrapper = styled.div`
  display: flex;
  width: 1170rem;
  align-items: center;
  // min-height: 200rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  // align-items: center;
  margin-top: 35rem;
`;
const ProfileThumb = styled.img`
  width: 40rem;
  height: 40rem;
  margin-right: 20rem;
`;

const ResponseText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 32rem;
  /* or 188% */

  /* GRAY 03 */

  color: #424242;
  text-align: left;
  word-break: keep-all;
  // margin-top: 35rem;
  margin-bottom: 30rem;
  white-space: pre-line;
`;

const CopyWrapper = styled.div`
  height: 50rem;
  width: 1200rem;
  margin-bottom: 25rem;
  margin-right: 50rem;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const CopyButton = styled.div`
  width: 50rem;
  height: 50rem;
  background: #3a79e3;
  &:active {
    background: #1c52ac;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  cursor: pointer;
`;

const CopyImg = styled.img`
  width: 24rem;
  height: 24rem;
`;
