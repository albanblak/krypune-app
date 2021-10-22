import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SideBarDiv = styled.div`
  background-color: white;
  height: 100%;
  width: 250px;
  position: fixed;
  top: 90px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Ul = styled.ul`
  list-style: none;
  flex-direction: column;
  width: 100%;
  text-align: left;

  .activeDashboard {
    border-left: 3px solid green;
    background-color: #f4fbf7;
    color: #26ae61;
  }
  .nonActiveDashboard {
  }

  & > li {
    align-self: flex-start;
  }

  & > li > a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 20px;
    font-size: 15px;
  }
  & > li > a:hover {
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    background-color: #f4fbf7;
    color: #26ae61;
    border-left: 3px solid green;
  }
`;

const Sidebar = () => {
  const params = useLocation().pathname;

  useEffect(() => {
    // console.log(params.pathname)
  });

  return (
    <SideBarDiv>
      <Ul>
        <li style={{ fontWeight: "bold", margin: "10px 20px" }}>
          <p>Kryesore</p>
        </li>
        <li>
          {" "}
          <Link
            className={
              params === "/dashboard/page"
                ? "activeDashboard"
                : "nonActiveDashboard"
            }
            to={"/dashboard/page"}
          >
            Aktivitet e profilit
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={
              params === "/dashboard/mesazhat"
                ? "activeDashboard"
                : "nonActiveDashboard"
            }
            to={"/dashboard/mesazhat"}
          >
            Mesazhet e Profili{" "}
          </Link>
        </li>
        <li style={{ fontWeight: "bold", margin: "10px 20px" }}>
          <p>Kandidati</p>
        </li>
        <li>
          <Link
            to={"/dashboard/resumemanager"}
            className={
              params === "/dashboard/resumemanager"
                ? "activeDashboard"
                : "nonActiveDashboard"
            }
          >
            {" "}
            Menaxho Rezymen
          </Link>
        </li>
        <li>
          <Link
            className={
              params === "/dashboard/addresume"
                ? "activeDashboard"
                : "nonActiveDashboard"
            }
            to={"/dashboard/addresume"}
          >
            {" "}
            Shto Rezymen
          </Link>
        </li>
        <li>
          <Link to={"/#"}> Gjej Pune</Link>
        </li>
        <li>
          <Link to={"/#"}> Shikoni Kategorite</Link>
        </li>
        <li style={{ fontWeight: "bold", margin: "10px 20px" }}>
          <p>Llogarija</p>
        </li>
        <li>
          <Link to={"/#"}> Profili im</Link>
        </li>
        <li>
          <Link to={"/#"}> Ckycu</Link>
        </li>
      </Ul>
    </SideBarDiv>
  );
};

export default Sidebar;
