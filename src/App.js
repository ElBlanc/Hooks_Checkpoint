import React from "react";
import Home from "./Components/Home/Home";
import MovieDesc from "./Components/Moviedesc/Moviedesc"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// const movieList = [
//   {
//     id: 1,
//     name: "Fast & Furious 8",
//     description:
//       "In the film, Dominic Toretto has settled down with his wife Letty Ortiz, until cyberterrorist Cipher coerces him into working for her and turns him against his team, forcing them to find Dom and take down Cipher.",
//     rating: 1,
//     posterUrl:
//       "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg",
//     prePosterUrl:
//       "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUSsKKuQtP0C0QiOWrHBzv_91zHPgSA2pwZxgB/jpg",
//     Trailer: "https://www.youtube.com/embed/uisBaTkQAEs",
//   },
//   {
//     id: 2,
//     name: "Wrath of Man",
//     description:
//       "Wrath of Man is a 2021 action thriller heist film directed by Guy Ritchie, from a script he co-wrote with Ivan Atkinson and Marn Davies, and is loosely based on the 2004 French film Cash Truck by Nicolas Boukhrief. ..",
//     rating: 4,
//     posterUrl:
//       "https://mrjavan.com/wp-content/uploads/2021/07/Wrath-of-Man.jpeg",
//     prePosterUrl:
//       "https://cdn.shopify.com/s/files/1/0747/3829/products/mL5308_1024x1024.jpg?v=1620815131",
//     Trailer: "https://www.youtube.com/embed/my4eXuV0MbI",
//   },
//   {
//     id: 3,
//     name: "BlackList",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 5,
//     posterUrl:
//       "https://m.media-amazon.com/images/M/MV5BNDFkZDI5ZGUtYTdkOC00YTFiLWJjNjMtNTQ3ZjIxMTY2ZjMyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg",
//     prePosterUrl:
//       "https://fr.web.img5.acsta.net/pictures/17/08/30/11/50/532007.jpg",
//     Trailer: "https://www.youtube.com/embed/vtIlfk7-GtI",
//   },
//   {
//     id: 4,
//     name: "Avengers EndGame",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 3,
//     posterUrl:
//       "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     prePosterUrl:
//       "https://cdn.shopify.com/s/files/1/1057/4964/products/avengers-endgame-vintage-movie-poster-original-1-sheet-27x41.jpeg?v=1563829726",
//     Trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
//   },
//   {
//     id: 5,
//     name: "Spider-Man Far.from.home",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 4,
//     posterUrl:
//       "https://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg",
//     prePosterUrl:
//       "https://fr.web.img4.acsta.net/pictures/19/05/24/12/36/0505470.jpg",
//     Trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
//   },
//   {
//     id: 6,
//     name: "Don't Breath2",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 3,
//     posterUrl:
//       "https://www.movies.ch/db_data/movies/dontbreathe2/artwrk/ki_l/PAT_DB2_ONESHEET_A4_210x297_FV_PC_RGB_300_.jpg",
//     prePosterUrl:
//       "https://ih1.redbubble.net/image.1069848605.4288/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
//     Trailer: "https://www.youtube.com/embed/gRbG2tjHYCA",
//   },
//   {
//     id: 7,
//     name: "Extraction",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 5,
//     posterUrl:
//       "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     prePosterUrl:
//       "https://media-cache.cinematerial.com/p/500x/r8fhw2rh/extraction-video-on-demand-movie-cover.jpg?v=1602745702",
//     Trailer: "https://www.youtube.com/embed/L6P3nI6VnlY",
//   },
//   {
//     id: 8,
//     name: "Jumanji Next Level",
//     description:
//       "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
//     rating: 4,
//     posterUrl:
//       "https://fr.web.img4.acsta.net/pictures/19/11/07/12/52/2054035.jpg",
//     prePosterUrl:
//       "https://play-lh.googleusercontent.com/2i5WTEANxIcSeXhUxRfBUCZe7CG9uIrj6DK5Sy-cCNVFJ05yDeeHWGTFOAdGEEvOtp1l9ey15qATKvY96i0",
//     Trailer: "https://www.youtube.com/embed/rBxcF-r9Ibs",
//   },
// ];
function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/movies" component={Products} />
        <Route path="/about" component={About} /> */}
        <Route path="/movie/:id" component={MovieDesc} />
        <Route path="/*" component={Error} />
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
