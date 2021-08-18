import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
  background-color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50px;
  line-height:50px;
  width:100%;
  `;
const Box = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    color: black;
`;

const Li = styled.li`
  font-size: 25px;
  :not(:last-child) {
    margin-right: 10px;
    padding-right:10px;
    border-right:1px solid black;
  }

`;

const Header = () => {
  return (
    <Nav>
      <Box>
        <Li>
          <Link to="/useInput">input</Link>
        </Li>
        <Li>
          <Link to="/useTabs">Tabs</Link>
        </Li>
        <Li>
          <Link to="/useEffect">Effect</Link>
        </Li>
        <Li>
          <Link to="/useTitle">Title</Link>
        </Li>
        <Li>
          <Link to="/useClick">Click</Link>
        </Li>
        <Li>
          <Link to="/useConfirm">Confirm</Link>
        </Li>
        <Li>
          <Link to="/usePrevnet">PreventLeave</Link>
        </Li>
        <Li>
          <Link to="/useBefore">BeforeLeave</Link>
        </Li>
        <Li>
          <Link to="/useFadeIn">FadeIn</Link>
        </Li>
        <Li>
          <Link to="/useNetwork">Network</Link>
        </Li>
        <Li>
          <Link to="/useScroll">Scroll</Link>
        </Li>
        <Li>
          <Link to="/useFullScreen">FullScreen</Link>
        </Li>
        <Li>
          <Link to="/useNotification">Notification</Link>
        </Li>
        <Li>
          <Link to="/useAxios">Axios</Link>
        </Li>
      </Box>
    </Nav>
  );
};
export default Header;
