import { useRecoilState } from "recoil";
import { choiceListState } from "atoms/messagestates";
import styled from "styled-components";
import UserChoiceButton from "./userchoicebutton";

const UserChoiceList = () => {
  const [choiceList] = useRecoilState(choiceListState);
  return (
    <ChoicesWrapper>
      {choiceList &&
        choiceList.map((item) => <UserChoiceButton key={item} text={item} />)}
    </ChoicesWrapper>
  );
};

export default UserChoiceList;

const ChoicesWrapper = styled.div`
  display: flex;
  height: 33rem;
  margin-top: 31.5rem;
  margin-left: 30rem;
`;
