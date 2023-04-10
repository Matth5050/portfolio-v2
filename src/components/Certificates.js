import React from "react";
import devbadge from "../assets/dev.png";
import pracbadge from "../assets/cloudprac.png";

export default function Certificates() {
  const openSource = [
    {
      pic: devbadge,
      alt: "AWS Developer Associate Badge",
      webLink:
        "https://www.credly.com/badges/015313b5-2c62-4722-a013-df6e11c94985/public_url",
      title: "AWS Developer Associate",
      description:
        "Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.",
      // order: 5,
    },
    {
      pic: pracbadge,
      alt: "AWS Cloud Practitioner Badge",
      webLink:
        "https://www.credly.com/badges/61b5c189-33b6-4fa6-a4ba-b0ac5ff4a1bb/public_url",
      title: "AWS Cloud Practitioner",
      description:
        "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
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
                <p className="mr-2">{projs.title}</p>
                <a href={projs.repoLink} className="ml-1"></a>
                {projs.webLink ? (
                  <a className="" href={projs.webLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="fill-white bi bi-trophy w-6 h-auto transition ease-in-out duration-500 hover:fill-yellow-500 cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
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
