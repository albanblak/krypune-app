//import styled from "styled-components";

/*
const Box = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  background-color: #2AA761;
  color: white;

`
const HidBox = styled.div`

  position: relative;
  top: 100%;
  transition: all .3s ease-out;
  height: 100%;

  ${Box}:hover & {
    top: 0;
  }
`


const ShBox = styled.div`
  top: 0;
  position: relative;
  transition: all .3s ease-out;
  height: 100%;
`
*/

const GreenLine = () => {
  return (
    <div className={"box"}>
      <div className={"hid-box"}>
        <h1>Regjistrohu! > </h1>
      </div>

      <div className={"show-box"}>
        <h1>Nese edhe ti je i interesum me kry pune! </h1>
      </div>
    </div>
  );
};

export default GreenLine;
