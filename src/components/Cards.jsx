import React from "react";
import Card from "./Card";
import "../styles/Cards.css";

import SolarP from "../images/solar.png";
import PlantsP from "../images/plants.png";
import EducationP from "../images/education.jpeg";

const cards = [
  {
    id: 1,
    title: "Solar Panels",
    image: SolarP,
    textProject:
      "There is more solar power that hits the earth every day than the current population can use in a year. Let's keep working to harness this great power and put it to good use. With efficiencies evolving, pricing being reduced every day, and new technologies being experimented with, it will be interesting to see where we are in the solar industry in the next couple of years. What do you think the future will look like?    ",
  },
  {
    id: 2,
    title: "Forestation",
    image: PlantsP,
    textProject:
      "Forests cover nearly a third of all land on Earth, providing vital organic infrastructure for some of the planet's densest, most diverse collections of life. They support countless species, including our own, yet we often seem oblivious of that. Humans now clear millions of acres from natural forests every year, especially in the tropics, letting deforestation threaten some of Earth's most valuable ecosystems.",
  },
  {
    id: 3,
    title: "Education",
    image: EducationP,
    textProject: "Environmental education is a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment. As a result, individuals develop a deeper understanding of environmental issues and have the skills to make informed and responsible decisions",
  },
];

function Cards() {
  return (
    <div className="project-cards-container d-flex justify-content-center align-items-center h-100">
      <h1 className="cards-title">Projects</h1>
      <h5 className="font-weight-bold text-xl-left m-5">
        These are some of the projects that you will be helping with your
        donation, we have agreements with companies that makes this possible
      </h5>
      <div className="row">
        {cards.map(({ title, image, id, textProject }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={textProject} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
