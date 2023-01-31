import React from "react";
import jokeBook from "../assets/jokeBook.png";
import leaderBet from "../assets/leaderBet.png";
import cardanoWatch from "../assets/cardano.png";
import slag from "../assets/slag.png";

export default function Projects() {
  const projects = [
    {
      pic: jokeBook,
      alt: "JokeBook Screen Shot",
      stack: "React",
      title: "JokeBook",
      description:
        "React web-app designed to bring all things funny to one place. Users can click a button to receive a joke or they can view user submitted jokes and vote on who is the most funny!",
      order: 5,
    },
    {
      pic: leaderBet,
      alt: "LeaderBet Screen Shot",
      stack: "React",
      title: "LeaderBet",
      description:
        "Sports betting app built with React that allows users to view games, scores, and odds while competing with each other for most wins on a global leader board",
      order: 4,
    },
    {
      pic: cardanoWatch,
      alt: "CardanoWatch Screen Shot",
      stack: "PHP",
      title: "CardanoWatch",
      description:
        "Built to better aggregate important news and events related to the Cardano block chain",
      order: 3,
    },
    {
      pic: slag,
      alt: "S.L.A.G. Screen Shot",
      stack: "C#/.NET",
      title: "S.L.A.G. Game",
      description:
        "Multiplayer PvP battle game where players build their teams and watch them fight",
      order: 3,
    },
  ];

  return (
    <React.Fragment>
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          {Object.values(projects).map((projs) => (
            <div className="mb-5">
              <img src={projs.pic} alt={projs.alt} className="mt-5"></img>
              <h4 className="text-lg font-bold mt-4">
                {projs.title} - {projs.stack}
              </h4>
              <p className="mt-1">{projs.description}</p>
              <hr className="mt-2"></hr>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
