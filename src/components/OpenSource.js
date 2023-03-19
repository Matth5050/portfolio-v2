import React from "react";
import recordSponge from "../assets/recordSponge.png";

export default function OpenSource() {
  const openSource = [
    {
      pic: recordSponge,
      alt: "RecordSponge Screen Shot",
      webLink: "https://recordsponge.com/",
      repoLink: "https://github.com/codeforpdx/recordexpungPDX",
      stack: "React.tsx",
      title: "RecordSponge",
      description:
        "RecordSponge allows users to quickly determine if they qualify for record expungement making this process much more affordable and time efficient.",
      // order: 5,
    },
  ];

  return (
    <React.Fragment>
      <div className="md:max-w-4xl">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          {Object.values(openSource).map((projs) => (
            <div className="mb-5">
              <img src={projs.pic} alt={projs.alt} className="mt-5"></img>
              <h4 className="text-lg font-bold mt-4 text-white flex">
                <p className="mr-2">{projs.title}</p> - {projs.stack}
                <a href={projs.repoLink} className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="fill-white bi bi-github w-6 h-auto transition ease-in-out duration-500 hover:fill-violet-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                {projs.webLink ? (
                  <a className="ml-3" href={projs.webLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="fill-white bi bi-github w-6 h-auto transition ease-in-out duration-500 hover:fill-green-300 cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                      <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
                    </svg>
                  </a>
                ) : null}
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
