import styled from "styled-components";

const Card = styled.div`
  color: white;
  width: 50%;
  margin-right: 10px;
  height: 160px;
  background-color: ${props => props.color} ;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  &:hover{
    transform: translate(0,-8px);
  }
`


const RezymeCard = ({name,  views, icon, color}) => {


   return(
       <Card color={color}>
           <div style={{padding: '20px', textAlign: 'left', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <h1>
                        {views}
                    </h1>
                    <p style={{fontWeight: 'bold'}}>
                        {name}
                    </p>
                </div>
               <div>
                   {icon}
               </div>
           </div>
       </Card>
   )


}

export  default RezymeCard;