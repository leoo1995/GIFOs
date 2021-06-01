import React, { useState } from "react";
import "./container.scss";
import HeaderPage from "../HeaderPage";
import ImagesSection from "../ImagesSection";
import SearchBar from "../SearchBar";

const Container = ({ darkToggle, setDarkToggle }) => {
  const [search, setSearch] = useState({ value: false });
  const [input, setInput] = useState({ value: "" });
  return (
    <div className={`container ${darkToggle && "dark"}`}>
      <HeaderPage {...{ darkToggle, setDarkToggle }} />
      <SearchBar
        {...{ darkToggle, setDarkToggle }}
        search={search}
        setSearch={setSearch}
        input={input}
        setInput={setInput}
      />
      <ImagesSection
        search={search}
        setSearch={setSearch}
        input={input}
        {...{ darkToggle, setDarkToggle }}
      />
    </div>
  );
};

export default Container;
