import React, { useState } from "react";
import OpenSource from "./OpenSource";
import Projects from "./Projects";
import ScrollButton from "./ScrollButton";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Turnstile() {
  const [index, setIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(null);

  const length = 2;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setSlideLeft(true);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    setSlideLeft(false);
  };

  const onClickProj = () => {
    setIndex(0);
  };

  const onClickSource = () => {
    setIndex(1);
  };

  return (
    <>
      <div className="flex justify-center mt-10 text-white">
        <p
          onClick={onClickProj}
          className={
            index === 0
              ? "transition ease-in-out duration-700 border border-b-red-200 border-x-transparent border-t-transparent mr-4 hover:cursor-pointer"
              : "border border-transparent mr-4 hover:cursor-pointer"
          }
        >
          Projects
        </p>
        <p
          onClick={onClickSource}
          className={
            index === 1
              ? "transition ease-in-out duration-700 border border-b-red-200 border-x-transparent border-t-transparent hover:cursor-pointer"
              : "border border-transparent hover:cursor-pointer"
          }
        >
          Open Source
        </p>
      </div>
      <div className="turnstile mt-10 flex justify-center ">
        <button
          onClick={() => handlePrevious()}
          className="transition ease-in-out duration-500 border border-transparent hover:border-red-900 hover:border rounded-md mt-5 mb-5 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-chevron-left fill-white hover:fill-blue-500 sticky top-1/3 bottom-1/3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <div className="flex justify-center">
          <TransitionGroup>
            <CSSTransition
              key={index}
              timeout={{ enter: 500, exit: 500 }}
              classNames={
                slideLeft
                  ? {
                      enter: "fade-enter",
                      enterActive: "fade-enter-active",
                      exit: "fade-exit",
                      exitActive: "fade-exit-active",
                      exitDone: "fade-exit-done",
                    }
                  : {
                      enter: "fade-enter-opp",
                      enterActive: "fade-enter-active-opp",
                      exit: "fade-exit",
                      exitActive: "fade-exit-active-opp",
                      exitDone: "fade-exit-done-opp",
                    }
              }
            >
              {index === 0 ? <Projects /> : <OpenSource />}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button
          onClick={() => handleNext()}
          className="rounded-md transition ease-in-out duration-500 border border-transparent hover:border-red-900 hover:border mt-5 mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-chevron-right fill-white hover:fill-blue-500 sticky top-1/3 bottom-1/3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        <ScrollButton />
      </div>
    </>
  );
}
