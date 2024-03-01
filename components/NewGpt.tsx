"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function NewGptBottom({ handleNextClick, qAndA, questionIndex }) {
  const typewriters = useMemo(() => {
    if (!qAndA) {
      return [];
    }

    return qAndA.map((item, index) => (
      <Typewriter
        key={index}
        words={item.q}
        cursor
        cursorStyle=""
        typeSpeed={10}
        delaySpeed={0}
      />
    ));
  }, []);
  return (
    <div className="flex w-full item py-3 pl-4 relative border bnb justify-between border-gray-900/50 text-white bg-gray-700 rounded-xl shadow-xs ">
      {typewriters[questionIndex]}
      <button
        onClick={handleNextClick}
        className="rounded-md hover:bg-gray-900 p-2 text-primary transition-colors mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4 m-1 md:m-0"
          stroke-width="2"
        >
          <path
            d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default NewGptBottom;
