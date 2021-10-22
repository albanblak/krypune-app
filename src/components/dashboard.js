import Sidebar from "./dashboard-components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { NavTransparentContext } from "../utils/NavTransparentContext";
import styled from "styled-components";
import { UserContext } from "../utils/UserContext";
import RezymeCard from "./dashboard-components/dashboard-minicomponents/rezyme-card";
import { GrDocumentOutlook, GoGraph } from "react-icons/all";
import LastActivity from "./dashboard-components/dashboard-minicomponents/last-activity";
import useFetch from "../hooks/useFetch";

const DashboardPage = styled.div`
  background-color: #f7f7f7;
  height: 100%;
  width: 100%;
  margin-left: 250px;
  margin-top: 90px;
  display: flex;
`;

const DashboardPageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  & > div{
    margin-top: 30px;
`;

const Dashboard = () => {
  const { navTrans, setNavTrans } = useContext(NavTransparentContext);
  const { user, setUser } = useContext(UserContext);
  const { data, loading, error } = useFetch("http://localhost:7000/resume");
  const [nrResume, setNrResume] = useState(0);

  useEffect(() => {
    console.log("poshte eshte data");
    console.log(data);
    if (data) {
      setNrResume(data.data.length);
    }
  }, [data]);

  useEffect(() => {
    setNavTrans(true);
    console.log("something from dashboard");
    return () => {
      setNavTrans(false);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        height: "855px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <DashboardPage>
        <DashboardPageWrapper>
          <div>
            <h1>Pershendetje, {user.userData.firstName}</h1>
          </div>

          <div>
            <p>Ballina > Aktivitet e profilit</p>
          </div>

          <div style={{ display: "flex", width: "100%" }}>
            <RezymeCard
              icon={
                <GrDocumentOutlook
                  size={60}
                  style={{ color: "#67c68f" }}
                  color={"#67C68F"}
                />
              }
              views={nrResume}
              name={"Rezymet aktive"}
              color={"#33B36A"}
            />
            <RezymeCard
              icon={<GoGraph size={60} color={"#717379"} />}
              views={0}
              name={"Resumes Views"}
              color={"#3C3E46"}
            />
          </div>

          <LastActivity />
        </DashboardPageWrapper>
      </DashboardPage>
    </div>
  );
};

export default Dashboard;
