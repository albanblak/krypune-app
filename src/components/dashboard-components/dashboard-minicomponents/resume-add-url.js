import styled from "styled-components";
import { AiFillCloseSquare } from "react-icons/all";
import { useEffect } from "react";

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
  }
`;

const ResumeAddUrl = (props) => {
  // const id = props.id;
  // const addUrl = props.addUrl;
  // const setAddUrl = props.setAddUrl;
  // const register = props.reg

  const field = props.field;
  const register = props.reg;
  const index = props.ind;
  const remove = props.remove;

  /* const onDelete = () => {
        const temp = addUrl.filter((value, index) => value !== id)
        console.log(temp);
        setAddUrl(temp);
    }
*/

  useEffect(() => {
    console.log("idja: " + index);
  });

  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "40px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <InputWrapper>
        <label>
          <p>Name</p>
          <div>
            <input
              defaultValue={field.value}
              {...register(`urls.${index}.name`)}
              type={"text"}
            />
          </div>
        </label>
        <AiFillCloseSquare
          onClick={() => remove(index)}
          style={{
            position: "absolute",
            right: "-10px",
            top: "-10px",
            cursor: "pointer",
          }}
          color={"red"}
          size={25}
        />
      </InputWrapper>

      <InputWrapper>
        <label>
          <p>URL</p>
          <div>
            <input
              defaultValue={field.value}
              {...register(`urls.${index}.urlname`)}
              type={"text"}
            />
          </div>
        </label>
      </InputWrapper>
    </div>
  );
};

export default ResumeAddUrl;
