import styled from 'styled-components'
import {makeStyles, Button} from "@material-ui/core";
import {IoLocationSharp, FaRegMoneyBillAlt} from 'react-icons/all'
import axios from "axios";
import AuthService from '../../../services/auth.service'


const useStyle = makeStyles({
    btn: {
        backgroundColor: '#26AE61',
        color: 'white',
        padding: '10px 30px',
        fontWeight: 'bold',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: "black"
        }
    },
})


const RishikoDiv = styled.div`
  margin-top: 92px;
  margin-left: 250px;
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 40px

`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`


const Header = styled.div`
  text-align: left;

  & > h3 {
    margin-bottom: 10px;
  }
;

  & > p {
  }

`

const PreviewBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  background-color: #eeeeee;
  margin-top: 40px;
  margin-bottom: 40px;

`

const Card = styled.div`
  height: 250px;
  width: 100%;
  padding: 30px;
  background-color: white;
  box-shadow: 0 0 1px 0px #999;


`
const CardBody = styled.div`

  height: 70%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`

const CardBodyImg = styled.div`

  width: 110px;
  height: 110px;


  & > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

const CardBodyData = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;

  & > p {
    font-size: 19px;
    margin: 5px 0px;
  }

  & > h3 {
    color: green;
    font-size: 20px;
  }
`

const IconWrapper = styled.div`

  display: flex;
  justify-content: flex-start;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    margin-top: 10px;
    color: #999999;
    font-weight: bold;
  }
;

  & > div > p {
    font-size: 17px;
    margin-left: 10px;
  }
`

const SubmitResume = (props) => {
    const data = props.data;


    const onSubmit = () => {
        console.log(data);
        axios.post("http://localhost:7000/resume/add", data, {
            headers: {
                "Authorization": `Bearer ${AuthService.getCurrentUser()}`,
                "Content-Type": 'multipart/form-data; Content-Disposition form-data; name="image"'
            },
        })
            .then(resdata => {
                console.log(data);
                if (resdata.data.status === 'success') {
                    const resumeId = resdata.data.resumeId;
                    console.log(resdata);
                }else if(resdata.data.status === 'failed'){
                    console.log(resdata)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    const classes = useStyle();
    document.body.style.backgroundColor = 'whitesmoke'
    return (
        <RishikoDiv>
            <Wrapper>
                <Header>
                    <h3>Submit Resume</h3>
                    <p>Ballina > Aktivitet e profilit</p>
                </Header>

                <PreviewBtn>
                    <div>
                        <h2>Preview</h2>
                    </div>

                    <div>
                        <Button onClick={() => props.setRishiko(true)} className={classes.btn}> Edit Resume</Button>
                        <Button onClick={onSubmit} className={classes.btn}> Submit Resume</Button>
                    </div>
                </PreviewBtn>

                <Card>
                    <CardBody>

                        <CardBodyImg>
                            <img
                                src={data.image ? URL.createObjectURL(data.image) : 'https://krypune.com/wp-content/themes/krypune/images/candidate.png'}
                                alt={'fotoja'}/>
                        </CardBodyImg>

                        <CardBodyData>
                            <h3> {data.name}</h3>
                            <p>{data.profesioni}</p>
                            <IconWrapper>
                                <div>
                                    <IoLocationSharp size={20}/>
                                    <p>{data.address}</p>
                                </div>
                                <div>
                                    <FaRegMoneyBillAlt size={20}/>
                                    <p>{'€' + data.norma + '/ hour'}</p>
                                </div>
                            </IconWrapper>
                        </CardBodyData>

                    </CardBody>


                    <div style={{height: '30%'}}>
                    </div>
                </Card>

            </Wrapper>

        </RishikoDiv>
    )
}


export default SubmitResume;