import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Projects from "./Projects";
import Certificates from "./Certificates";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Accordian() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        animate={customAnimation}
        className="mt-7"
      >
        <AccordionHeader className="" onClick={() => handleOpen(1)}>
          <p className="text-white">Projects</p>
        </AccordionHeader>
        <AccordionBody>
          <Projects />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        animate={customAnimation}
      >
        <AccordionHeader className="mt-5" onClick={() => handleOpen(2)}>
          Certifications
        </AccordionHeader>
        <AccordionBody>
          <Certificates />
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
