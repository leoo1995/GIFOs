import React, { useEffect, useState } from "react";
import notFoundImage from "../../assets/notfound.gif";
import Image from "./Image";
import "./imagessection.scss";
import { getGIFsSearch } from "../../api";
import errorGif from "../../assets/error.gif";
import loadingGif from "../../assets/loading.gif";
import loadingGifDark from "../../assets/loadingdark.gif";
const ImagesSection = ({ darkToggle, ...props }) => {
  const [GIFs, setGIFs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [imagesLoaded, setImagesLoaded] = useState([]);
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
          GIFs.map(GIF => {
            return (
              <Image
                key={GIF.id}
                src={
                  GIF?.images?.original?.url
                    ? GIF?.images?.original?.url
                    : notFoundImage
                }
                // src={notFoundImage}
                alt={GIF.title}
                id={GIF.id}
                {...{ darkToggle }}
              />
            );
          })
        )}
      </section>
    </>
  );
};

export default ImagesSection;
