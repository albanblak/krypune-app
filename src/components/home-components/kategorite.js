import React from "react";

const Kategorite = () => {
  const categoryItems = [
    { hover: "#f8f8f8", id: 0, text: "Dizajn Grafik" },
    { hover: "#f8f8f8", id: 1, text: "Arkitekture" },
    { hover: "#f8f8f8", id: 2, text: "Fotografi" },
    { hover: "#f8f8f8", id: 3, text: "Programim" },
    { hover: "#f8f8f8", id: 4, text: "Digital Marketing" },
    { hover: "#f8f8f8", id: 5, text: "Art Figurativ" },
  ];

  const div = (text1) => {
    return (
      <div className={"category-div"} key={text1.id}>
        <a className="a-category" href={"/#"} style={{ fontWeight: "bold" }}>
          {" "}
          {text1.text}{" "}
        </a>
      </div>
    );
  };

  return (
    <div className={"category-container"}>
      <div className={"category-wrapper"}>
        <p className={"category-title"}>KATEGORITE</p>
        <div className={"category-body"}>
          {categoryItems.map((text1) => div(text1))}
        </div>
      </div>
      <a className={"category-shfletoni-button"} href={"/#"}>
        Shfletoni kategorite
      </a>
    </div>
  );
};

export default Kategorite;
