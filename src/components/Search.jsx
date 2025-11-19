import React from "react";
import "../styles/search.scss";
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
export default function Search() {
  return (
    <>
      <div className="search">
        <CiSearch className="icons" />
        <input type="search" name="search" id="" placeholder="search task" />
        <CiSliderHorizontal className="icons" />
      </div>
    </>
  );
}
