const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value; //extracted search from thr Form
  const config = { params: { q: searchTerm } };
  // ^ made query string object  which uses the name of for the property of params
  // ^ we can pass in this config object and whatever we have under params,
  // those key value pairs will be added
  // to the query string.
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
// ^ then we just await it.
  
  makeImages(res.data)
  form.elements.query.value = "";
});
// then we call to make images, a function we made that just creates a bunch of images and appends
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
