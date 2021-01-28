import "./App.css";
import React, { useState } from "react";
import allData from "./allData";
import Menu from "./components/Menu";
import Search from "./components/Search";
import SearchForm from "./components/SearchForm";

const allProducts = ["All", ...allData.map((item) => item.category)];

function App() {
  const [menuItem, setMenuitem] = useState([""]); //empty oste otan kanei load prwti fora na min kanei display kati
  const [buttons, setButtons] = useState(allProducts);
  const [product, setProduct] = useState("");
  const filter = (button) => {
    if (button === "All") {
      return setMenuitem(allData);
    }
    const filterData = allData.filter((item) => item.category === button);
    //edw thelei alagi me to e.targer.value apo to search box

    setMenuitem(filterData);
  };

  return (
    <div className="App">
      <div className="title">
        <h1 className="text-center">Search for vazo h mpolakia</h1>
      </div>
      <SearchForm
        product={product}
        button={buttons}
        filter={filter}
        setProduct={setProduct}
      />
      <Search button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}
export default App;
