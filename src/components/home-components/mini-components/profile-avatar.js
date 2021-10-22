import Avatar from "@material-ui/core/Avatar";
import { GoTriangleUp } from "react-icons/all";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../utils/UserContext";
import AuthService from "../../../services/auth.service";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;

  & > li {
    margin-bottom: 10px;
    font-size: 14px;
  }

  & > li > a {
    color: ${(props) => (props.transparent ? "#8e8e8e" : "#303030")};
    text-decoration: none;
  }

  & > li > a:hover {
    color: ${(props) => (props.transparent ? "white" : "black")};
  }
`;

const DropDownDiv = styled.div`
  display: ${(props) => {
    return props.dropdown ? "block" : "none";
  }};
  padding: 10px 20px;
  position: absolute;
  background-color: ${(props) => (props.transparent ? "#303030" : "white")};
  list-style: none;
  text-align: left;
  width: 200px;
  bottom: -120px;
  border-radius: 3px;
  transition: opacity 2s ease-out;
  opacity: ${(props) => (props.dropdown ? 1 : 0)};
  height: ${(props) => (props.dropdown ? "auto" : 0)};
`;

const Wrapper = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  width: 175px;
`;

const UserName = styled.p`
  color: ${(props) => (props.transparent ? "#303030" : "white")};
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  overflow: hidden;
`;

const ProfileAvatar = (props) => {
  const { user, setUser } = useContext(UserContext);

  const reference = useRef(null);
  const linkDropDown1 = useRef(null);
  const linkDropDown2 = useRef(null);
  const linkDropDown3 = useRef(null);
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => setDropDown(true);

  const closeDropDown = () => setDropDown(false);

  useEffect(() => {
    const onClick = (e) => {
      if (
        (reference.current !== null && !reference.current.contains(e.target)) ||
        e.target === linkDropDown3.current ||
        e.target === linkDropDown2.current ||
        e.target === linkDropDown1.current
      ) {
        closeDropDown();
      }
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [dropDown]);

  const url =
    "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg";

  return (
    <Wrapper ref={reference} onClick={showDropDown} className={"dropdown-menu"}>
      <div onClick={showDropDown} style={{ margin: "2px 10px" }}>
        <Avatar alt={"TestTest"} src={url} />
      </div>

      <div onClick={showDropDown} style={{ position: "relative" }}>
        <UserName transparent={props.transparent}>
          {"tung, " + user.userData.firstName}
        </UserName>
      </div>

      <DropDownDiv dropdown={dropDown} transparent={props.transparent}>
        <Ul transparent={props.transparent}>
          <li>
            <Link ref={linkDropDown1} to={"/dashboard/page"}>
              {" "}
              Aktivitet e profilit
            </Link>
          </li>
          <li>
            <Link ref={linkDropDown2} to={"/#mes"}>
              {" "}
              Mesazhet
            </Link>
          </li>
          <li>
            <Link ref={linkDropDown3} to={"/#pro"} onClick={AuthService.logout}>
              Ckycu{" "}
            </Link>
          </li>
        </Ul>
        <GoTriangleUp
          style={{ position: "absolute", right: "10px", top: "-13px" }}
          color={props.transparent ? "#303030" : "white"}
          size={20}
        />
      </DropDownDiv>
    </Wrapper>
  );
};

export default ProfileAvatar;
