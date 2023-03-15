import React, { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState(null);

  //checks user device for preferred light/dark mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //checks if dark mode is enabled
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //toggles light/dark mode
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mt-5 ">
      <div>
        <img
          className="inline-block h-14 w-14 rounded-full "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <p className="mt-5 home-font text-xl font-bold dark:text-red-700 text-white ">
        DevOps by{" "}
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-orange-600 via-yellow-600 to-amber-400">
          day
        </span>
        , front-end by{" "}
        <span
          onClick={handleThemeSwitch}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800"
        >
          night
        </span>
        . I'm always looking to build new things.
      </p>
      <p className=" mt-2 text-white">
        I'm Matt Herbert, a DevOps engineer in Portland, Oregon. With a solid
        foundation in AWS and React, I aim to create apps that maximize
        enjoyment and minimize frustration
      </p>
      <div className="flex mt-5">
        <a href="https://github.com/Matth5050">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="transition ease-in-out duration-500 fill-white hover:fill-violet-600 bi bi-github w-6 h-auto mr-5"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/matthew-herbert-portland/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="transition ease-in-out duration-500 fill-white hover:fill-blue-800 bi bi-linkedin w-6 h-auto"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
