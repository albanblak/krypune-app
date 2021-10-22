import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { VscTriangleDown } from "react-icons/all";
import { Avatar } from "@material-ui/core";
import "./carousel.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Wrapper = styled.div`
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Card = styled.div`
  position: relative;
  background-color: ${(props) => (props.active ? "black" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
  border-radius: 10px;
  padding: 30px;
`;

const Carousel = () => {
  return (
    <div style={{ background: "#f4f4f5", padding: "40px 0px" }}>
      <h2 style={{ padding: "50px" }}>Rreth Platformes krypune.com</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => swiper}
        onSlideChange={(e) => e}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <Wrapper active={isActive}>
              <Card active={isActive}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Platforma KRYPUNE nje platforme e re ne msein tone, qe
                  mbeshtet ndermaresit dhe te rinjte tane qe shprehin interesim
                  te shfaqin aftesit e tyre. SHpresojme se kj o Platforme do te
                  gjeje shtrijrje edhe me te madhe se vetem brenda kufijve.
                </p>
                {isActive && (
                  <VscTriangleDown
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      right: "48%",
                      color: "black",
                    }}
                    size={"30px"}
                  />
                )}
              </Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={
                    "https://krypune.com/wp-content/uploads/2020/09/Artboard-5.png"
                  }
                  style={{ width: "60px", height: "60px", marginTop: "50px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Zana Rusinovci
                </p>
                <p>Accout manager @ United Pixels</p>
              </div>
            </Wrapper>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Wrapper active={isActive}>
              <Card active={isActive}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Koncepti i platformes eshte modern dhe i lehte per t'u
                  perdorur. Swisscontact eshte kernar qe kemi perkrahur kete
                  iniciative premtuese per krijmin e me shume mundesive per pune
                  ne Kosove
                </p>
                {isActive && (
                  <VscTriangleDown
                    style={{
                      color: "black",
                      position: "absolute",
                      bottom: "-20px",
                      right: "48%",
                    }}
                    size={"30px"}
                  />
                )}
              </Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={
                    "https://krypune.com/wp-content/uploads/2020/09/Artboard-1.png"
                  }
                  style={{ width: "60px", height: "60px", marginTop: "50px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Argjenda Grazdami
                </p>
                <p>Program manager @ PPSE</p>
              </div>
            </Wrapper>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Wrapper active={isActive}>
              <Card active={isActive}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Si dy ishe studente qe kemi perfunduar trajnimin ne UPA, jemi
                  shume krenar qe ke mi pasur mundesinse te krijojm bashkepunim
                  ne kuader te kesaj marreveshjeje me U P dhe Swisscontact.
                  Shpresojme qe kjo Platforme do te na krijoj mundesi te reja
                  bashkpunimi.
                </p>
                {isActive && (
                  <VscTriangleDown
                    style={{
                      color: "black",
                      position: "absolute",
                      bottom: "-20px",
                      right: "48%",
                    }}
                    size={"30px"}
                  />
                )}
              </Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={
                    "https://krypune.com/wp-content/uploads/2020/10/53749486_336120453686319_5258204202793959424_n-585x430.jpg"
                  }
                  style={{ width: "60px", height: "60px", marginTop: "50px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  PAC STUDIO
                </p>
              </div>
            </Wrapper>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
