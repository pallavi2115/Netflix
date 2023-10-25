// API key
const api = "api_key=cf844d51c28cbd7aa32d4c4cbc887d96";

// Base Url
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original"; //Using TMDB login

const image_url = "https://image.tmdb.org/t/p/w300";

// Request for Movie Data
const request = {

    fetchtrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,// Using TMDB support section
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

//Used to Truncate the string (Short Description About the Movie)
function truncate(str,n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

//Banner
fetch(request.fetchNetflixOriginals)
   .then((res) => res.json())

   .then((data) => {  //refresh change new movie 

    const setMovie = 
        data.results[Math.floor(Math.random() * data.results.length - 1)];
    
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage = 
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;  
   });

   //Movies Rows and Netflix Originals
   fetch(request.fetchNetflixOriginals)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "NetflixOriginals";

    row.appendChild(title);
     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s = movie.name.replace(/\s+/g, " "); //replace movie one by one

        poster.id = s;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });

   });

   //Trending
   fetch(request.fetchtrending)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Top Rated";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });

   //Action
   fetch(request.fetchActionMovies)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Action Movies";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });


   //Comedy
   fetch(request.fetchComedyMovies)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Comedy Movies";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });

   //Horror
   fetch(request.fetchHorrorMovies)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Horror Movies";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });

   //Romance
   fetch(request.fetchRomanceMovies)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Romance Movies";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });

   //Documentaries
   fetch(request.fetchDocumentaries)
   .then((res) => res.json())

   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "Documentaries";

    row.appendChild(title);

     const row_posters = document.createElement("div");
     row_posters.className = "row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });
   });

