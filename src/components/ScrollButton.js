import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 850) {
      setVisible(true);
    } else if (scrolled <= 850) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="mb-10 ml-2 flex justify-center items-end ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        className={
          visible
            ? "bi bi-arrow-up-circle fill-white sticky bottom-5 visible hover:fill-blue-gray-300 hover:cursor-pointer"
            : "bi bi-arrow-up-circle fill-transparent sticky bottom-5 nonVisible"
        }
        viewBox="0 0 16 16"
        onClick={scrollToTop}
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        />
      </svg>
    </div>
  );
};

export default ScrollButton;
