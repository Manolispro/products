import React from "react";

const Search = ({ filter, button }) => {
  return (
    <div className="flex  justify-center">
      {button.map((cat, index) => {
        return (
          <button
            className=" bg-blue-500 text-xs text-white p-1 m-2 p-1"
            type="button"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Search;
