import Modal from 'react-modal';
import {AiFillCloseSquare, AiOutlineMail, RiLockPasswordFill, MdPersonOutline} from "react-icons/all"
import {Button} from "@material-ui/core";
import { makeStyles} from "@material-ui/core";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React, {useState} from "react";
import axios from "axios";




const useStyle = makeStyles((theme) => ({
    button: {
        margin: '20px',
        width: '100%',
        height: '40px',
        backgroundColor: 'green',
        fontWeight: 'bold',
        "&:hover":{
            backgroundColor: '#E9F7EF',
            color: 'green',
            boxShadow: 'none'
        }
    },
    buttonActive: {
        margin: '20px',
        width: '100%',
        height: '40px',
        backgroundColor: 'green',
        fontWeight: 'bold',
        "&:hover":{
            backgroundColor: '#E9F7EF',
            color: 'green',
            boxShadow: 'none'
        }
    },
    buttonDeactive: {
        margin: '20px',
        width: '100%',
        height: '40px',
        backgroundColor: '#fafafa',
        fontWeight: 'bold',
        color: '#9e9e9e',
        "&:hover":{
            backgroundColor: '#E9F7EF',
            color: 'green',
            boxShadow: 'none'
        }
    }
    ,
    buttonSubmit: {
        backgroundColor: 'green',
        color: 'white',
        alignSelf: 'flex-start',
        "&:hover": {
            color: ' green',
            backgroundColor: '#e9f7ef'
        }

    }
}))


const SignupModal = (props) => {

    const[roleActive, setRoleActive] = useState(true);
    const[firstName, setFirstName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();



    const setActive = () =>{
        setRoleActive(true);
    }

    const setDeactive =  () => {
        setRoleActive(false);
    }

    const signUp = () => {
        axios.post('http://localhost:7000/auth/signup', {

                email: email,
                fullname:firstName,
                password: password

        })
            .then((response) => {
                console.log(response.data);
                props.closeModal();

            })
    }


   const classes = useStyle();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            transitionDuration: '4s',
            padding: '0px',
            width: 'auto'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    }

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
            ariaHideApp={false}
        >


            <div style={{
                width: '1100px',
                height: '560px',
                background: 'white',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    height: '17%',
                    width: '100%',
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0px 30px'
                }}>
                    <div>
                        <h2>Regjistrohu</h2>
                    </div>
                    <div>
                        <AiFillCloseSquare onClick={props.closeModal} size={40} style={{cursor: 'pointer'}}/>
                    </div>
                </div>

                <div style={{width: '100%', height: '100%', display: 'flex'}}>
                    <div style={{height: '100%', width: '43%', margin: '0px'}}>
                        <img alt={'something'} src={'https://krypune.com/wp-content/uploads/2021/07/Untitled-6-1.png'} height={'100%'}
                             width={'100%'}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '57%', padding: '40px'}}>

                        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={setActive}
                                className={ roleActive ?  classes.buttonActive : classes.buttonDeactive}
                                startIcon={<PermIdentityIcon />}
                            >
                                Kandidate
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={setDeactive}
                                className={ !roleActive ? classes.buttonActive : classes.buttonDeactive}
                                startIcon={<BusinessCenterIcon/>}
                            >
                                Punedhenes
                            </Button>
                        </div>

                        <div style={{padding: '20px'}}>

                            <div style={{
                                backgroundColor: '#fcfcfc',
                                color: '#909090',
                                padding: '20px 10px',
                                marginBottom: '10px',
                                width: '100%',
                                border: '1px solid #e0e0e0',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <MdPersonOutline size={25}/>
                                <input
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder={'Emri i perdoruesit'} type={'text'} style={{
                                    backgroundColor: '#fcfcfc',
                                    fontSize: '15px',
                                    marginLeft: '10px',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none'
                                }}/>
                            </div>
                        </div>


                        <div style={{padding: '20px'}}>

                            <div style={{
                                backgroundColor: '#fcfcfc',
                                color: '#909090',
                                padding: '20px 10px',
                                marginBottom: '10px',
                                width: '100%',
                                border: '1px solid #e0e0e0',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <AiOutlineMail size={25}/>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder={'Email'} type={'text'} style={{
                                    backgroundColor: '#fcfcfc',
                                    fontSize: '15px',
                                    marginLeft: '10px',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none'
                                }}/>
                            </div>
                        </div>
                        <div style={{padding: '20px'}}>
                            <div style={{
                                padding: '20px 10px',
                                marginBottom: '10px',
                                color: '#909090',
                                width: '100%',
                                border: '1px solid #e0e0e0',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <RiLockPasswordFill size={25}/>
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder={'Password'} type={'text'} style={{
                                    fontSize: '15px',
                                    marginLeft: '10px',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none'
                                }}/>
                            </div>
                            <div>
                                <Button onClick={signUp} variant="outlined" className={classes.buttonSubmit} >Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Modal>

    )


}

export default SignupModal;