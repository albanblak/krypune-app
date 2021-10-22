import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoPencil, GoEye, FiDelete } from "react-icons/all";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }
`;

const ResumeOptions = ({ resumeId }) => {
  return (
    <Wrapper>
      <Element>
        <GoPencil />
        <Link to={`/dashboard/editresume/${resumeId}`}> Edit</Link>
      </Element>

      <Element>
        <GoEye />
        <Link to={"/#"}>Publish</Link>
      </Element>

      <Element>
        <FiDelete />
        <Link to={"/#"}>Delete</Link>
      </Element>
    </Wrapper>
  );
};

export default ResumeOptions;
