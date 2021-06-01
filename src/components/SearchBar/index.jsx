import React, { useEffect, useState } from "react";
import "./searchbar.scss";
import searchIconLigth from "../../assets/icon-search-mod-noc.svg";
import ilustrationBar from "../../assets/ilustra_header.svg";
import { getAutocompleteTags } from "../../api";
const SearchBar = ({ darkToggle, ...props }) => {
  const [autoCompleteTags, setAutoCompleteTags] = useState([]);

  useEffect(() => {
    getAutocompleteTags(props.input.value)
      .then(tagsJson => tagsJson.map(tagJson => tagJson.name))
      .then(tags => setAutoCompleteTags(tags));
  }, [props.input]);

  const suggestions = () => {
    return (
      <ul
        className={`${autoCompleteTags.length ? "suggestions" : ""} ${
          darkToggle ? "dark" : ""
        } `}
      >
        {autoCompleteTags.map((autoCompleteTag, id) => (
          <li
            key={id}
            onClick={() => {
              props.setInput({ value: autoCompleteTag });
              props.setSearch({ value: !props.search.value });
            }}
          >
            {autoCompleteTag}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <form
      className={`searchbar ${darkToggle ? "dark" : ""} ${
        autoCompleteTags.length ? "deploy-tags" : ""
      }`}
      onSubmit={e => {
        e.preventDefault();
        props.setSearch({ value: !props.search.value });
      }}
    >
      <h2 className={darkToggle ? "dark" : ""}>
        ¡Inspirate y busca los mejores <b>GIFS</b>!
      </h2>
      <img src={ilustrationBar} alt="ilustracion" />
      <div className={`bar ${darkToggle ? "dark" : ""}`}>
        <input
          className={darkToggle ? "dark" : ""}
          type="text"
          value={props.input.value}
          onChange={e => props.setInput({ value: e.target.value })}
          placeholder="Busca gifs"
        />

        <button type="submit" className="button-submit">
          <img src={searchIconLigth} alt="buscar" />
        </button>
      </div>{" "}
      {suggestions()}
    </form>
  );
};

export default SearchBar;
