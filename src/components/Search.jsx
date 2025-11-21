import React, { useState, useEffect } from "react";
import "../styles/search.scss";
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import { useFilter } from "../context/FilterContext";
export default function Search({ onSearch }) {
  const [showFilter, setShowFilter] = useState(false);
  const { setSearchText } = useFilter();
  const { setSelectedCategory } = useFilter();
  const handleCategoryClick = (e) => {
    if (e.target.tagName === "SPAN") {
      setShowFilter(!showFilter);
    }
  };

  return (
    <>
      <div className="search-filter-container">
        <div className="search">
          <CiSearch className="icons" />
          <input
            type="search"
            placeholder="search task"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <CiSliderHorizontal
            className="icons"
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>
        {showFilter && (
          <div className="filter-data">
            <div
              name="category"
              id=""
              className="category-list"
              onClick={handleCategoryClick}
            >
              <span value="all" onClick={() => setSelectedCategory("all")}>
                All
              </span>
              <span
                value="personal"
                onClick={() => setSelectedCategory("personal")}
              >
                Personal
              </span>
              <span value="study" onClick={() => setSelectedCategory("study")}>
                Study
              </span>
              <span
                value="important"
                onClick={() => setSelectedCategory("important")}
              >
                Important
              </span>
              <span
                value="office"
                onClick={() => setSelectedCategory("office")}
              >
                Office Task
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
