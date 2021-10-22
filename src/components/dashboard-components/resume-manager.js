import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { NavTransparentContext } from "../../utils/NavTransparentContext";
import Sidebar from "./Sidebar";
import DashboardHead from "./dashboard-minicomponents/Dashboard-Head";
import { Button } from "@material-ui/core";
import {
  IoMdPerson,
  CgFileDocument,
  GoLocation,
  GoCalendar,
} from "react-icons/all";

import useFetch from "../../hooks/useFetch";
import ResumeOptions from "./dashboard-minicomponents/resume-options";

const ResumeManagerDiv = styled.div``;

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: auto;
  margin-left: 250px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  & > div {
    margin-top: 50px;
  }
`;
const HeaderDiv = styled.div`
  width: 100%;
  background-color: #ddf3fe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Table = styled.table`
  margin-top: 40px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  & > thead {
    background-color: black;
    color: white;
    & > tr {
      border-right: 1px solid white;
    }
    & > tr > th {
      border-right: 1px solid #555555;
      padding: 20px 15px;
      & > div {
        display: flex;
        align-items: center;
        & > p {
          margin-left: 4px;
          font-size: 15px;
        }
      }
    }
  }
  ,
  & > tbody {
    background-color: white;
  & > tr{
    border-top: 1px solid #555555;
    transition: all 400ms linear;
    &:hover{
      background-color: #F4FBF7;
      border-top-color: green;
    } 
  },
    & > tr > td {
      padding: 30px 10px;
    }
  }
`;

const ResumeManager = () => {
  const { setNavTrans } = useContext(NavTransparentContext);

  useEffect(() => {
    setNavTrans(true);
    console.log("something");
    return () => {
      setNavTrans(false);
    };
  }, []);

  const { data, loading, error } = useFetch("http://localhost:7000/resume");

  useEffect(() => {
   /* if (data) {
      console.log("poshte eshte qikjo");
      console.log(data.data[0].firstName);
      for (const key in data) {
        for (const sec in data[key]) {
          console.log(data[key][sec]);
        }
      }
    }
    */

      console.log(data);
  }, [data]);

  return (
      <>
      {loading && <p>Loading...</p>}
          {error && <p>Ndodhi nje gabim</p>}
    <ResumeManagerDiv>
      <Sidebar />
      <Wrapper>
        <DashboardHead location={"Candidate Dashboard"} />
        <HeaderDiv>
          <div style={{ textAlign: "left", color: "#4587A9" }}>
            <h3>Miresevini ne krypune</h3>
            <p>momentalisht jeni kycur si {"test"}</p>
          </div>
        </HeaderDiv>

        <Table>
          <thead>
            <tr>
              <th>
                <div>
                  <IoMdPerson />
                  <p>Name</p>
                </div>
              </th>
              <th>
                <div>
                  <CgFileDocument />
                  <p>Title</p>
                </div>
              </th>
              <th>
                <div>
                  <GoLocation />
                  <p>Location</p>
                </div>
              </th>
              <th>
                <div>
                  <GoCalendar />
                  <p>Date Posted</p>
                </div>
              </th>
              <th>
                <div />
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((item) => (
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.profesioni}</td>
                  <td>{item.address}</td>
                  <td>
                    {new Date(item.createdAt).getFullYear().toString() +
                      "-" +
                      new Date(item.createdAt).getMonth().toString() +
                      "-" +
                      new Date(item.createdAt).getDate().toString()}
                  </td>
                    <td>
                        <ResumeOptions resumeId={item.id}/>
                    </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Wrapper>
    </ResumeManagerDiv>
          </>
  );
};

export default ResumeManager;
