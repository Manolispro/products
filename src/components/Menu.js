import React from "react";

const Menu = ({ menuItem }) => {
  return (
    <div>
      {menuItem.map((item) => {
        return (
          <div key={item.id}>
            <div
              className=" text-center p-1  bg-white w-20 text-xs"
              id={`${item.title}`}
            >
              <img src={item.image} alt={item.name} />
              <h2>{item.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
