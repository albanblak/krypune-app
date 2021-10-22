import {
  MdDeveloperMode,
  BiBriefcase,
  GrMapLocation,
  FaMoneyBillWave,
  GoStar,
} from "react-icons/all";

const KerkesatCard = (props) => {
  return (
    <div className={"kerkesat-card"}>
      <div className={"kerkesat-card-body"} style={{ flexGrow: "1" }}>
        <div className={"kerkesat-card-body-pic"}>
          <MdDeveloperMode size={"30px"} />
        </div>
        <div
          className={"kerkesat-card-body-context"}
          style={{ marginRight: "30px" }}
        >
          <h3>{props.title}</h3>
          <div className={"kerkesat-card-body-context-info"}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <BiBriefcase size={"25px"} />{" "}
              <a href={"/#"} style={{ marginLeft: "10px" }}>
                {" "}
                {props.company}{" "}
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <GrMapLocation size={"25px"} />{" "}
              <a href={"/#"} style={{ marginLeft: "10px" }}>
                {" "}
                {props.location}{" "}
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <FaMoneyBillWave size={"25px"} />{" "}
              <a href={"/#"} style={{ marginLeft: "10px" }}>
                {" "}
                {props.salary}{" "}
              </a>
            </div>
          </div>
          <div
            className={"kerkesat-card-body-context-rating"}
            style={{ textAlign: "left" }}
          >
            <p style={{ fontSize: "16px", marginBottom: "1px" }}>
              Pershtypjet per kete punedhenes
            </p>
            <div style={{ display: "flex", marginTop: "2px" }}>
              <p
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  fontWeight: "bold",
                }}
              >
                {props.nrrating}
              </p>{" "}
              {Array.from(Array(props.rating).keys()).map((value, index) => (
                <GoStar key={index} color={"orange"} size={"20px"} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={"kerkesat-card-title"}>
        <div
          className={"kerkesat-card-title-type"}
          style={{
            background: "#8EA5EF",
            padding: "2px 10px",
            marginBottom: "20px",
          }}
        >
          <a
            href={"/#"}
            style={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
          >
            Freelance
          </a>
        </div>
        <div className={"kerkesat-card-title-more"}>
          <a href={props.link}> Shiko me Shume</a>
        </div>
      </div>
    </div>
  );
};

export default KerkesatCard;
