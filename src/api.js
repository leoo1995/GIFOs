const URL_BASE = "https://api.giphy.com/v1/gifs/";
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";

export const getGIFsTrending = (limit = 25, offset = 0) => {
  return fetch(
    `${URL_BASE}trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`
  )
    .then(response => response.json())
    .then(json => json.data)
    .catch(e => {
      console.log(e.message);
      return [{ images: { original: { url: "../../assets/notfound.gif" } } }];
    });
};
export const getGIFsSearch = (search, limit = 25, offset = 0) => {
  return fetch(
    `${URL_BASE}search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${offset}`
  )
    .then(response => response.json())
    .then(json => json.data)
    .catch(e => {
      return [e];
    });
};
export const getAutocompleteTags = (search, limit = 5, offset = 0) => {
  return fetch(
    `${URL_BASE}search/tags?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${offset}`
  )
    .then(response => response.json())
    .then(json => json.data)
    .catch(e => {
      console.log(e);
      return [];
    });
};
