import React, { useEffect, useState } from "react";
import "./imagessection.scss";
import { getGIFsSearch } from "../../api";
import errorGif from "../../assets/error.gif";
import loadingGif from "../../assets/loading.gif";
import loadingGifDark from "../../assets/24 (2).gif";
const ImagesSection = ({ darkToggle, ...props }) => {
  const [GIFs, setGIFs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setGIFs([]);
    getGIFsSearch(props.input.value, 12).then(results => {
      setGIFs(results);
      setIsLoading(false);
      if (!results.length && props.input.value)
        setGIFs([{ images: { original: { url: errorGif } } }]);
    });
  }, [props.search]);

  return (
    <>
      <h2 className={`search-results ${darkToggle ? "dark" : ""}`}>
        {GIFs.length ? "Resultados de búsqueda" : ""}
      </h2>
      <section
        className={`${GIFs.length ? "images-section" : ""} ${
          darkToggle ? "dark" : ""
        }`}
      >
        {isLoading ? (
          <img
            src={darkToggle ? loadingGifDark : loadingGif}
            alt="Cargando"
            className="loading"
          />
        ) : (
          GIFs.map((GIF, id) => (
            <div key={id}>
              <img src={GIF.images.original.url} alt={GIF.title} id={GIF.id} />
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default ImagesSection;
