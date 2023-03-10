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
      webLink: "https://jokebook.xyz/",
      repoLink: "https://github.com/Matth5050/jokeBook2.0",
      stack: "React",
      title: "JokeBook",
      description:
        "React web-app designed to bring all things funny to one place. Users can click a button to receive a joke or they can view user submitted jokes and vote on who is the most funny!",
      order: 5,
    },
    {
      pic: leaderBet,
      alt: "LeaderBet Screen Shot",
      // webLink: "",
      repoLink: "https://github.com/Matth5050/LeaderBet",
      stack: "React",
      title: "LeaderBet",
      description:
        "Sports betting app built with React that allows users to view games, scores, and odds while competing with each other for most wins on a global leader board",
      order: 4,
    },
    {
      pic: cardanoWatch,
      alt: "CardanoWatch Screen Shot",
      webLink: "https://thecardanowatch.com/",
      repoLink: "https://github.com/Matth5050/Cardano-Street",
      stack: "PHP",
      title: "CardanoWatch",
      description:
        "Built to better aggregate important news and events related to the Cardano block chain",
      order: 3,
    },
    {
      pic: slag,
      alt: "S.L.A.G. Screen Shot",
      // webLink: "",
      repoLink:
        "https://github.com/Matth5050/TeamWeekClient.Solution/tree/main",
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
              <h4 className="text-lg font-bold mt-4 text-white flex">
                <a href={projs.webLink} className="mr-2">
                  {projs.title}
                </a>{" "}
                - {projs.stack}
                <a href={projs.repoLink} className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="fill-white bi bi-github w-6 h-auto mr-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </h4>
              <p className="mt-1 text-white">{projs.description}</p>
              <hr className="mt-2"></hr>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
