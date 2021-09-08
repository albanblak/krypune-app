import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React, {useContext, useEffect, useState} from "react";
import './header.css';
import styled from "styled-components";
import LoginModal from "./home-components/mini-components/login-modal";
import SignupModal from "./home-components/mini-components/signup-modal";
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ProfileAvatar from "./home-components/mini-components/profile-avatar";
import {UserContext} from "../utils/UserContext";
import {NavTransparentContext} from "../utils/NavTransparentContext";


const useStyles = makeStyles((theme) => ({
    BtnTransparent: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: 'transparent',
            color: 'green',
            transitionDuration: '2s',
        }

    },
    BtnFilled: {
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        boxShadow: 'none',
        "&:hover": {
            color: 'green',
            backgroundColor: 'white',
        }
    }
}))


const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: ${props => !props.transparent ? '1px solid' : 'none'};
  top: 0;
  position: fixed;
  z-index: 100;
  border-color: ${props => !props.transparent ? '#3d3d3d' : '#4b4948'};
  width: 100%;
  font-weight: bold;
  background-color: ${props => props.transparent ? 'white' : ''};
  box-shadow: 5px 2px 10px #4b4948;

`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
`

const Menuja = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-left: 0.1px solid;
  border-right: 1px solid;
  border-color: ${props => props.transparent ? '#3d3d3d' : '#4b4948'};

  & > ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
  }

  & > ul > li {
    display: inline;
    margin-right: 10px;
  }

  & > ul > li > a {
    padding: 10px;
    text-decoration: none;
    color: ${props => props.transparent ? 'black' : 'white'};
  }

  & > ul > li > a:hover {
    color: green;
  }
`

const JepPune = styled.a`
  margin-right: 10px;
  padding: 10px;
  color: whitesmoke;
  text-decoration: none;
  background-color: green;

`

const Auth = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  & > a {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
    color: ${props => props.transparent ? 'black' : 'white'};
  }

  & > a:hover {
    color: green
  }
`

const Header = () => {

    const {navTrans, setNavTrans} = useContext(NavTransparentContext);
    const {user} = useContext(UserContext)

    const classes = useStyles();


    const logoUrl = 'http://krypune.com/wp-content/uploads/2020/10/krypunelogo-01.png';
    const [active, setActive] = useState(false);


    const onScroll = () => {
        window.pageYOffset > 100 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        console.log('nav from header')
        setActive(true);
        if(!navTrans){
            setActive(false);
            window.addEventListener('scroll', onScroll)
        }

        return () => {
            window.removeEventListener('scroll', onScroll)
        }

    },[navTrans])







    const [modalLoginIsOpen, setLoginIsOpen] = useState(false);
    const openLoginModal = () => {
        setLoginIsOpen(true);
        setSignupIsOpen(false)
    };
    const closeLoginModal = () => {
        setLoginIsOpen(false);
    };


    const [modalSignupIsOpen, setSignupIsOpen] = useState(false);
    const openSignupModal = () => {
        setSignupIsOpen(true);
        setLoginIsOpen(false);
    };
    const closeSignupModal = () => {
        setSignupIsOpen(false);
    };


    return (
        <div style={{transitionDuration: '5s', transitionTimingFunction: 'ease-in'}}>

            <LoginModal closeModal={closeLoginModal} modalIsOpen={modalLoginIsOpen} />
            <SignupModal closeModal={closeSignupModal} modalIsOpen={modalSignupIsOpen}/>

            <HeaderDiv transparent={active}>
                <Wrapper>
                    <div className="icon">
                        <a href="/#"> <img style={{height: "45px"}} src={logoUrl} alt="icon"/></a>
                    </div>

                    <Menuja transparent={active}>

                        <ul>
                            <li><a href="/#">Ballina</a></li>
                            <li><a href="/#">Gjej Pune</a></li>
                            <li><a href="/#">Kandidatet</a></li>
                            <li><a href="/#">Bllog</a></li>
                            <li><a href="/#">Per Ne </a></li>
                            <li><a href="/#">Kontakt </a></li>
                        </ul>

                        <JepPune href={'#'}>Jep Pune</JepPune>

                    </Menuja>

                    {
                        user.isLoggedIn ?
                            <ProfileAvatar  transparent={active} name={'testtest'}/> :
                            <Auth transparent={active}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={!active ? classes.BtnTransparent : classes.BtnFilled}
                                    startIcon={<LockOpenIcon/>}
                                    onClick={openLoginModal}
                                >
                                    Kycu
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={!active ? classes.BtnTransparent : classes.BtnFilled}
                                    startIcon={<AddCircleIcon/>}
                                    onClick={openSignupModal}
                                >
                                    Regjistrohu
                                </Button>
                            </Auth>

                    }
                </Wrapper>

            </HeaderDiv>

        </div>

    )


}

export default Header;