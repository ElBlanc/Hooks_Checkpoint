import React, { useState } from "react";
import MovieList from "./Components/MovieList/MovieList";
import Filter from "./Components/Filter/Filter";
import "./App.css";
import Navigation from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Slider from "./Components/Carousel/Carousel"
import MovieAdd from "./Components/MovieAdd/MovieAdd"
const movieList = [
  {
    name: "Fast & Furious 8",
    description:
      "In the film, Dominic Toretto has settled down with his wife Letty Ortiz, until cyberterrorist Cipher coerces him into working for her and turns him against his team, forcing them to find Dom and take down Cipher.",
    rating: "8.5",
    posterUrl:
      "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg",
    prePosterUrl:
      "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUSsKKuQtP0C0QiOWrHBzv_91zHPgSA2pwZxgB/jpg",
  },
  {
    name: "Wrath of Man",
    description: "Wrath of Man is a 2021 action thriller heist film directed by Guy Ritchie, from a script he co-wrote with Ivan Atkinson and Marn Davies, and is loosely based on the 2004 French film Cash Truck by Nicolas Boukhrief. ..",
    rating: "7.5",
    posterUrl:
      "https://mrjavan.com/wp-content/uploads/2021/07/Wrath-of-Man.jpeg",
    prePosterUrl:
      "https://cdn.shopify.com/s/files/1/0747/3829/products/mL5308_1024x1024.jpg?v=1620815131",
  },
  {
    name: "BlackList",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "9.5",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDFkZDI5ZGUtYTdkOC00YTFiLWJjNjMtNTQ3ZjIxMTY2ZjMyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg",
    prePosterUrl:
      "https://fr.web.img5.acsta.net/pictures/17/08/30/11/50/532007.jpg",
  },
  {
    name: "Avengers EndGame",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "6.5",
    posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    prePosterUrl:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/avengers-endgame-vintage-movie-poster-original-1-sheet-27x41.jpeg?v=1563829726",
  },
  {
    name: "Spider-Man Far.from.home",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "6.5",
    posterUrl: "https://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg",
    prePosterUrl:
      "https://fr.web.img4.acsta.net/pictures/19/05/24/12/36/0505470.jpg",
  },
  {
    name: "Don't Breath2",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "8.5",
    posterUrl: "https://www.movies.ch/db_data/movies/dontbreathe2/artwrk/ki_l/PAT_DB2_ONESHEET_A4_210x297_FV_PC_RGB_300_.jpg",
    prePosterUrl:
      "https://ih1.redbubble.net/image.1069848605.4288/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    name: "Extraction",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "10",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    prePosterUrl:
      "https://media-cache.cinematerial.com/p/500x/r8fhw2rh/extraction-video-on-demand-movie-cover.jpg?v=1602745702",
  },
  {
    name: "Jumanji Next Level",
    description: "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: "9.5",
    posterUrl: "https://lh3.googleusercontent.com/proxy/w8Yo0YuBxrtp-B0e-SkMNcKnFNminlunQ8b-LXW_b1Xym9V_Biv_oTC7vxkJD9bH0P_rKGGabSlTZ1y2Taq6DhcXBAZms6P7PgTssnpDaAA5pp2UMQHR6R5Wubji",
    prePosterUrl:
      "https://play-lh.googleusercontent.com/2i5WTEANxIcSeXhUxRfBUCZe7CG9uIrj6DK5Sy-cCNVFJ05yDeeHWGTFOAdGEEvOtp1l9ey15qATKvY96i0",
  },
];
function App() {
 
  const [movieListState, setMovieListState] = useState( movieList)
  const [toShow, setToShow] = useState(movieList);
  const [searchTerm, setSearchTerm] = useState("");
  const addHandler = () => {};
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
 const movieListHandler =(NewMovie) => {setMovieListState(prevState=> prevState.push(NewMovie)
  )
}
  return (
    <div className="App">
      <Navigation/>
      <Filter handleChange={handleChange} />
      <Slider />
      <MovieList movieList={toShow} search={searchTerm} />
      <MovieAdd movieListHandler={movieListHandler}/>
      <Footer/>
    </div>
  );
}

export default App;
