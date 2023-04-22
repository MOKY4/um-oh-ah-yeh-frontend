import React from "react";
import styled from "styled-components";
import Systemthumb from "@assets/images/SystemThumb.png";
import CopyImg from "@assets/images/copy.png";

const ResponseMessage = () => {
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
  };

  return (
    <MainWrapper>
      <ResponseWrapper>
        <ProfileWrapper>
          <ProfileThumb src={Systemthumb} alt="" />
          <ResponseText id="ResponseText-1">
            안녕하세요 차장님, 저는 최근에 귀사에 신입사원으로 입사했습니다.
            현재 맡은 업무를 수행하며 중요한 내용을 보고드리려고 합니다. 우선,
            저는 [해당 업무의 명칭 또는 내용]을 맡아 진행 중입니다. 이번 주에는
            [해당 업무의 주요 내용]을 수행하여 [해당 결과]를 도출해냈습니다.
            이에 대한 자세한 내용은 [작성한 보고서나 문서의 이름]에 첨부하였으니
            참고 부탁드립니다. 또한, [해당 업무] 수행 중 발생한 이슈에 대해서는
            [해당 내용]으로 인해 [해당 결과]가 발생하였습니다. 이에 대한 대응
            방안으로 [해당 내용]을 제안하고자 합니다. 마지막으로, 앞으로 [해당
            업무]를 수행할 때 [해당 내용]에 대한 고려가 필요하며, 그에 따른 대응
            전략을 강구하여 더욱 원활한 업무 수행에 도움이 되도록
            노력하겠습니다. 감사합니다.이에 대한 대응 방안으로 [해당 내용]을
            제안하고자 합니다. 마지막으로, 앞으로 [해당 업무]를 수행할 때 [해당
            내용]에 대한 고려가 필요하며, 그에 따른 대응 전략을 강구하여 더욱
            원활한 업무 수행에 도움이 되도록 노력하겠습니다. 감사합니다. 이에
            대한 대응 방안으로 [해당 내용]을 제안하고자 합니다. 마지막으로,
            앞으로 [해당 업무]를 수행할 때 [해당 내용]에 대한 고려가 필요하며,
            그에 따른 대응 전략을 강구하여 더욱 원활한 업무 수행에 도움이 되도록
            노력하겠습니다. 감사합니다.이에 대한 대응 방안으로 [해당 내용]을
            제안하고자 합니다. 마지막으로, 앞으로 [해당 업무]를 수행할 때 [해당
            내용]에 대한 고려가 필요하며, 그에 따른 대응 전략을 강구하여 더욱
            원활한 업무 수행에 도움이 되도록 노력하겠습니다. 감사합니다.
          </ResponseText>
        </ProfileWrapper>
      </ResponseWrapper>
      <CopyWrapper>
        <CopyButton
          src={CopyImg}
          alt=""
          onClick={() => CopyHandler("ResponseText-1")}
        />
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
  margin-bottom: 50rem;
`;

const ResponseWrapper = styled.div`
  display: flex;
  width: 1091rem;
  align-items: center;
  min-height: 300rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
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
  margin-top: 35rem;
  margin-bottom: 30rem;
`;

const CopyWrapper = styled.div`
  height: 50rem;
  width: 1151rem;
  margin-bottom: 25rem;
  margin-right: 50rem;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const CopyButton = styled.img`
  width: 50rem;
  height: 50rem;
  cursor: pointer;
`;
