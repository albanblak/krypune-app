import Modal from "react-modal";
import {
  AiFillCloseSquare,
  AiOutlineMail,
  RiLockPasswordFill,
} from "react-icons/all";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import InputWithIcons from "./inputWithIcons";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useJwt, decodeToken } from "react-jwt";
import { UserContext } from "../../../utils/UserContext";
import Authservice from "../../../services/auth.service";

const ModalHeader = styled.div`
  padding: 0 20px;
  height: 21.05%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 79.05%;
  padding: 20px 50px;
`;
const useStyles = makeStyles(() => ({
  loginbtn: {
    backgroundColor: "green",
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "white",
    fontSize: "15px",
    padding: "10px 20px",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));
const LoginModal = (props) => {
  const closeModal = props.closeModal;
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    Authservice.login(email, password)
      .then((response) => {
        console.log(response);

        closeModal();
        setLoading(false);
        setUser({
          isLoggedIn: true,
          userData: decodeToken(localStorage.getItem("user")),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      transitionDuration: "4s",
      padding: "0px",
      width: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div style={{ width: "550px", height: "475px", background: "white" }}>
        <ModalHeader>
          <div>
            <h1>Kycu</h1>
          </div>
          <div>
            <AiFillCloseSquare
              size={"50px"}
              onClick={props.closeModal}
              style={{ cursor: "pointer" }}
            />
          </div>
        </ModalHeader>

        <ModalBody>
          <InputWithIcons
            icon={<AiOutlineMail size={25} />}
            placeHolder={"Email"}
            type={"text"}
            onchange={setEmail}
          />
          <InputWithIcons
            icon={<RiLockPasswordFill size={25} />}
            placeHolder={"Password"}
            type={"password"}
            onchange={setPassword}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <input
              type={"checkbox"}
              style={{
                marginLeft: "2px",
                marginRight: "10px",
                width: "15px",
                height: "15px",
              }}
            />{" "}
            <p> Me mbaje mend </p>
          </div>

          <Button onClick={handleLogin} className={classes.loginbtn}>
            Kycu
          </Button>

          <div style={{ alignSelf: "flex-start" }}>
            <p>
              {" "}
              Nuk keni Llogari?{" "}
              <a href={"/#"} style={{ textDecoration: "none", color: "green" }}>
                Regjistrohuni tani
              </a>
            </p>
          </div>

          <div style={{ alignSelf: "flex-start" }}>
            <a href={"/#"} style={{ textDecoration: "none", color: "green" }}>
              {" "}
              Fjalekalim i humbuer?{" "}
            </a>
          </div>
          {loading && <p>Loading</p>}
        </ModalBody>
      </div>
    </Modal>
  );
};

export default LoginModal;
