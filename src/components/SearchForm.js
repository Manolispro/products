import React from "react";

const SearchForm = ({ product, setProduct, filter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    filter(product);
    setProduct("");
  };
  return (
    <form className="flex  justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={product}
        required
        onChange={(e) => {
          setProduct(e.target.value);
        }}
      />
      <input
        className="bg-blue-500 text-xs text-white p-1"
        type="submit"
        value="search"
      />
    </form>
  );
};

export default SearchForm;
