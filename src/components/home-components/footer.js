import styled from "styled-components";

import {AiOutlineCopyrightCircle} from 'react-icons/all'

const FooterDiv = styled.div`
        
      width: 100%;
      height: 480px;
      background-color: #282828;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      
    `

const FooterCenterVerticaly = styled.div`
        width: 100%;
        height: 300px;
        border-top: 1px solid #363636;
      border-bottom: 1px solid #363636;
      display: flex;
      justify-content: center;
      align-items: center;
    `

const FooterCenterHorizontaly = styled.div`
      width: 1200px; 
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    `

const InnerDiv = styled.div`
      height: 100%;
      text-align: left;
      padding-top: 50px;
      color: #909090;

      & > p {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 15px;
      }

    `

const InnerDivTitle = styled.h3`
        margin-bottom: 20px;
        color: white;
    `


const Footer = () => {






   return(
       <FooterDiv>
            <FooterCenterVerticaly>
                <FooterCenterHorizontaly>
                    <InnerDiv>
                        <InnerDivTitle>Per Kandidatet</InnerDivTitle>
                        <p>Gjej pune</p>
                        <p>Shikoni Kategorite</p>
                    </InnerDiv>

                    <InnerDiv>
                        <InnerDivTitle > Per Punedhenesit</InnerDivTitle>
                        <p>Jep Pune</p>
                        <p>Shikoni Kandidatet</p>
                    </InnerDiv>

                    <InnerDiv>
                        <InnerDivTitle >Te tjera</InnerDivTitle>
                        <p>Bllog</p>
                        <p>Per ne</p>
                        <p>Kontakt</p>
                    </InnerDiv>


                    <InnerDiv>
                        <InnerDivTitle >Regjistrohuni per Newsletter</InnerDivTitle>
                        <p>Email Adresa</p>
                        <input type={'text'} style={{height: '35px', width: '100%', display: 'block', marginBottom: '10px', marginTop: '10px'}}/>
                        <button style={{borderRadius: '5px',padding: '15px 20px', background: 'green', color: 'white', fontWeight: 'bold'}}>Abonohu</button>

                    </InnerDiv>


                </FooterCenterHorizontaly>
            </FooterCenterVerticaly>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft: '200px'}}>
                <AiOutlineCopyrightCircle  color={"#909090"} size={'13'}/>
                <p style={{color: '#909090', marginLeft: '5px' }}>  All Rights Reserved.</p>
            </div>
       </FooterDiv>

   )

}

export default Footer;