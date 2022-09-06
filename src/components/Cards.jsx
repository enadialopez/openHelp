import React from "react";
import Card from "./Card";


const cards = [
  {
    id: 1,
    title: "Proyecto 1",
    image: "",
    textProject: "",
  },
  {
    id: 2,
    title: "Proyecto 2",
    image: "",
    textProject: "",
  },
  {
    id: 3,
    title: "Proyecto 3",
    image: "",
    textProject: "",
  },
];

function Cards() {
  
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id, textProject }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} textProject={textProject} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;