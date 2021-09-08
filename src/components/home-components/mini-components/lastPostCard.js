import styled from "styled-components";
import {useState} from "react";
import { IoReturnUpForward} from 'react-icons/all'


const Card = styled.div`
     margin-top: 10px; 
     display: flex;
     width: 372px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     opacity: ${props => props.hover ? '1' : '0.9'};
     transition-delay: 3s;
   `

const TitleDiv = styled.div`
      text-align: left; 
    `

const Title = styled.h1`
      font-size: 15px;
      margin-top: 40px;
      font-weight: bold;
    `

const More = styled.a`
        padding: 10px 50px;
        border: 1px solid black;
        align-self: flex-start;
        margin-top: 40px;
        margin-left: 2px;
      font-weight: bold;
      border-radius: 3px;
      cursor: pointer;
      
      ${Card}:hover & {
          background-color: #2AA761;
        color: white;
        border: none;
      }
    `
const ImageDiv = styled.div`
      position: relative;
      overflow: hidden;
      transition-delay: 5s;
    `

const GreenSquare = styled.div`
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #2AA761;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
     
      transition-delay: 4s;
      
       ${ImageDiv}:hover &{
         bottom: 5px;
       }
    `

const LastPostCard = (props) => {

    const [hover, setHover] = useState(false);

    return(
        <Card onMouseLeave = {() => {setHover(false)}} onMouseOver = {() => {setHover(true)}} hover = {hover}>

            <ImageDiv>
                <img src={props.image} width={'100%'}  alt={'something'} style={{cursor: 'pointer'}}/>
                <GreenSquare>
                    <IoReturnUpForward size={27} style={{color: 'white'}}/>
                </GreenSquare>
            </ImageDiv>

            <TitleDiv>
                <Title> <a style={{textDecoration:'none', color: 'black'}} href={'/#'}>{props.title}</a> </Title>
            </TitleDiv>

            <div style={{textAlign: 'left', marginTop: '25px'}}>
                <p style={{fontSize: '14px'}}>{props.title}</p>
            </div>

            <More href={props.link}>Me Shume</More>
        </Card>
    )
}
export  default LastPostCard;