import { PageHeader, PageHeaderBack, Logo } from "@styles/headers";
import HeaderLogo from "@assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const LogoButtonHandler = () => {
    navigate("/");
  };
  return (
    <>
      <PageHeader>
        <Logo src={HeaderLogo} alt="" onClick={LogoButtonHandler}></Logo>
      </PageHeader>
      <PageHeaderBack></PageHeaderBack>
    </>
  );
};

export default Header;
