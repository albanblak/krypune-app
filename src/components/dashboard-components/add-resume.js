import Sidebar from "./Sidebar";
import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {NavTransparentContext} from "../../utils/NavTransparentContext";
import {UserContext} from "../../utils/UserContext";
import {Button} from "@material-ui/core";
import {BiUpload} from 'react-icons/all'
import {makeStyles} from '@material-ui/core/styles';
import ResumeAddUrl from "./dashboard-minicomponents/resume-add-url";
import ResumeAddEducation from "./dashboard-minicomponents/resume-add-education";
import ResumeAddEx from "./dashboard-minicomponents/resume-add-ex";
import {useForm, useFieldArray, Controller} from "react-hook-form";
import axios from "axios";
import AuthService from '../../services/auth.service'
import SubmitResume from "./dashboard-minicomponents/submit-resume";


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#eeeeee',
        padding: '10px 20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10px',
        cursor: 'pointer',
        alignSelf: 'flex-start',
        marginBottom: '20px',
        "&:hover": {
            backgroundColor: 'black',
            color: 'white'
        },

        "& > p": {
            fontWeight: 'bold'
        }

    },
    btnUpload: {
        width: '120px'
    },
    textArea: {
        resize: 'none',
        height: '150px',
        width: '100%',
        outline: 'none',
        border: 'none',
        fontSize: '15px'
    },
    imageDiv: {
        width: 'auto',
        marginBottom: '40px',
        textAlign: 'left',
        "& > img": {
            width: '300px',
            height: '300px'
        },
        "& > label > p": {
            fontWeight: 'bold'
        },
        "& > label > p > span": {
            fontWeight: 'bold',
            color: '#888b9a '
        }
    },
    submit: {
        backgroundColor: 'green',
        color: 'white',
        padding: '20px',
        left: '0px'
    }


}))


const AddResumeDiv = styled.div`
  background-color: green;

`

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
`


const InputWrapper = styled.div`
  margin-bottom: 40px;

  & > label > p {
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & > label > div {
    padding-left: 10px;
    border: 1px solid #e0e0e0;
    background-color: #fcfcfc;
  }

  & > label > div > input {
    font-size: 15px;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: #fcfcfc;
  }
`

const FiedlArrayWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > h3 {
    margin-top: 20px;
    margin-bottom: 0;
  }

,
& > div {
  padding: 10px;
  width: 100%;
  background-color: white;
}
`

const HeaderDiv = styled.div`
  width: 100%;
  background-color: #DDF3FE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const RemoveBtn = styled.p`

  display: ${props => props.showImage ? 'inline' : 'none'};
  margin-top: 40px;
  font-weight: bold;
  margin-bottom: 50px;
  color: red;
  cursor: pointer;
`

const AddResume = () => {
    const [formData, setFormData] = useState({});
    const [response, setResponse] = useState(false);
    const [rishikio, setRishiko] = useState(true);
    const {register, handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            urls: [],
            educations: [],
            experience: []
        }
    });

    const {
        fields: urlsField,
        append: urlsAppend,
        remove: urlsRemove
    } = useFieldArray({control, name: 'urls'})

    const {
        fields: educationsField,
        append: educationsAppend,
        remove: educationsRemove
    } = useFieldArray({control, name: 'educations'})

    const {
        fields: experienceField,
        append: experienceAppend,
        remove: experienceRemove
    } = useFieldArray({control, name: 'experience'})


    const onSubmit = (data) => {
        setFormData(data)
        setRishiko(false);
        data.image = image;
        console.log(data);
    }

    const {navTrans, setNavTrans} = useContext(NavTransparentContext);
    const {user, setUser} = useContext(UserContext);
    const classes = useStyles();
    const [showImage, setShowImage] = useState(false)
    const [image, setImage] = useState('');

    useEffect(() => {
        setNavTrans(true);
        console.log('something')
        return () => {
            setNavTrans(false);
        }
    }, []);


    const loadFile = (event) => {
        if (event.target.files.length !== 0) {
            setImage(event.target.files[0])
            setShowImage(true);
        }
    }


    return (


        rishikio ?

            <AddResumeDiv>
                <Sidebar/>
                <Wrapper>
                    <div>
                        <h2 style={{textAlign: 'left', marginBottom: '10px'}}>Submit Resume</h2>
                        <p style={{fontSize: '15px'}}>Ballina > Aktivitet e Profilit</p>
                    </div>

                    <HeaderDiv>
                        <div style={{textAlign: 'left', color: '#4587A9'}}>
                            <h3>Miresevini ne krypune</h3>
                            <p>momentalisht jeni kycur si {user.userData.firstName}</p>
                        </div>
                        <Button style={{display: 'block', fontWeight: 'bold'}}> Ckycu</Button>
                    </HeaderDiv>

                    <div style={{width: '100%', backgroundColor: 'white', padding: '30px'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <InputWrapper>
                                <label>
                                    <p>Emri Juaj</p>
                                    {errors.name &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <input {...register('name', {required: true})} placeholder={'Your full name'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <InputWrapper>
                                <label>
                                    <p>Email adresa</p>
                                    {errors.email &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <input {...register('email', {required: true})} placeholder={'Email Adressa'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <InputWrapper>
                                <label>
                                    <p>Profesioni</p>
                                    {errors.profesioni &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <input {...register('profesioni', {required: true})}
                                               placeholder={'P.SH Dizajner Grafik'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <InputWrapper>
                                <label>
                                    <p>Lokacioni</p>
                                    {errors.address &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <input {...register('address', {required: true})}
                                               placeholder={'P.SH Rr. Rexhep Mala Nr.20 Prishtine, Kosove'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <div className={classes.imageDiv}>
                                <img src={image ? URL.createObjectURL(image) : ''} alt={'fotoja'} style={{display: showImage ? 'block' : 'none'}}/>
                                <RemoveBtn showImage={showImage} onClick={() => {
                                    setShowImage(false);
                                    setImage('')
                                }}>(x)Largo</RemoveBtn>
                                <label>
                                    <p>Foto <span>(opcionale)</span></p>
                                    <input   style={{display: 'none'}} type={'file'}
                                            onChange={loadFile}/>

                                    <div className={classes.button + " " + classes.btnUpload}>
                                        <BiUpload size={30}/>
                                        <p>Ngarko</p>
                                    </div>
                                </label>
                            </div>

                            <InputWrapper>
                                <label>
                                    <p>Norma minimale / ore(€)<span style={{color: '#888B9A'}}>(opcionale)</span></p>
                                    {errors.norma &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <input {...register('norma', {required: true})} placeholder={'P.SH 20'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <InputWrapper>
                                <label>
                                    <p>Permbajtja e Rezymes</p>
                                    {errors.content &&
                                    <span style={{color: 'red', textAlign: 'left'}}>This field is required</span>}
                                    <div>
                                        <textarea {...register('content', {required: true})}
                                                  className={classes.textArea}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <InputWrapper>
                                <label>
                                    <p> Aftesite<span style={{color: '#888B9A'}}>(opcionale)</span></p>
                                    <div>
                                        <input {...register('skills')} placeholder={'Ndaj me presje aftesite relevante'}
                                               type={'text'}/>
                                    </div>
                                </label>
                            </InputWrapper>

                            <FiedlArrayWrapper>
                                <h3>URL</h3>
                                <div>
                                    {urlsField.map((field, index) => (
                                        <ResumeAddUrl remove={urlsRemove} field={field} reg={register} ind={index}
                                                      key={field.id}/>
                                    ))}
                                </div>
                                <Button className={classes.button} onClick={(e) => urlsAppend({})}>
                                    Shto url
                                </Button>
                                <p>Mund të shtoni ndonjë link të ndonjë web-faqeje apo të rrjeteve sociale</p>
                            </FiedlArrayWrapper>

                            <FiedlArrayWrapper>
                                <h3>Edukimi</h3>
                                <div>
                                    {educationsField.map((field, index) => (
                                        <ResumeAddEducation remove={educationsRemove} ind={index} key={field.id}
                                                            field={field} reg={register}/>
                                    ))}
                                </div>
                                <Button className={classes.button} onClick={(e) => educationsAppend({})}>
                                    Shto
                                </Button>
                            </FiedlArrayWrapper>

                            <FiedlArrayWrapper>
                                <h3>Pervoja</h3>
                                <div>
                                    {experienceField.map((field, index) => (
                                        <ResumeAddEx key={field.id} reg={register} ind={index} remove={experienceRemove}
                                                     field={field}/>
                                    ))}
                                </div>
                                <Button className={classes.button} onClick={(e) => experienceAppend({})}>
                                    Shto
                                </Button>
                            </FiedlArrayWrapper>


                            <input className={classes.submit} type={'submit'}/>
                        </form>
                    </div>

                    <div>
                        <p style={{display: response ? 'block' : 'none', fontSize: '15px', color: 'green'}}>u shtua me
                            sukses</p>
                    </div>
                </Wrapper>
            </AddResumeDiv>
            :
            <>
                <Sidebar/>
                <SubmitResume data={formData} setRishiko={setRishiko}/>
            </>

    )
}

export default AddResume;



