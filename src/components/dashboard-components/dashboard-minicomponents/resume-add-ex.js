import styled from "styled-components";
import {AiFillCloseSquare} from "react-icons/all";
import {useEffect} from "react";

const InputWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;

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
    
    & > label > div > textarea {
      font-size: 15px;
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
      background-color: #fcfcfc;
    }
`

const ResumeAddEx = (props) => {

 const field = props.field;
 const register = props.reg;
 const remove = props.remove;
 const index= props.ind;


 useEffect(() => {

     console.log('fieldId: ' + field.id);
 })

    return(


        <div style={{padding: '10px', marginBottom: '40px', backgroundColor: '#f9f9f9'}}>
            <InputWrapper>
                <label>
                    <p>Employer</p>
                    <div>
                        <input  {...register(`experience.[${index}].employer`)} type={'text'}/>
                    </div>
                </label>
                <AiFillCloseSquare onClick={() => remove(index)}
                                   style={{position: "absolute", right: '-10px', top: '-10px', cursor: 'pointer'}}
                                   color={'red'} size={25}/>
            </InputWrapper>

            <InputWrapper>
                <label>
                    <p>Job Title</p>
                    <div>
                        <input defaultValue={field.value} {...register(`experience.[${index}].jobTitle`)} type={'text'}/>
                    </div>
                </label>
            </InputWrapper>

            <InputWrapper>
                <label>
                    <p>Start/end date</p>
                    <div>
                        <input defaultValue={field.value} {...register(`experience.[${index}].startEndDate`)} type={'text'}/>
                    </div>
                </label>
            </InputWrapper>

            <InputWrapper>
                <label>
                    <p>Notes (opcionale)</p>
                    <div>
                        <textarea defaultValue={field.value} {...register(`experience.${index}.notes`)} style={{width: '100%', height: '150px', border:'none', outline: 'none', fontSize: '15px'}}/>
                    </div>
                </label>
            </InputWrapper>
        </div>
    )
}

export default ResumeAddEx;