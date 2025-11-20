// src/context/FilterContext.jsx

import { createContext, useContext, useState, useEffect } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Load data from localStorage one time
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("list")) || [];
    setData(stored);
  }, []);

  // FILTER + SEARCH LOGIC
  const filteredTasks = data.filter((task) => {
    const matchCategory =
      selectedCategory === "all" || task.category === selectedCategory;

    const matchSearch = task.text
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <FilterContext.Provider
      value={{
        data,
        setData,
        selectedCategory,
        setSelectedCategory,
        searchText,
        setSearchText,
        filteredTasks,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook (easy usage)
export const useFilter = () => useContext(FilterContext);
