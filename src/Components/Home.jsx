import React from 'react'
import Moviecard from "./Moviecard"
function Home() {

const data = [
  {
    title: "The Truman Show",
    url: "https://i.pinimg.com/736x/c8/98/33/c898338b324a08b5d0c24809b1ad41f3.jpg",
    key: 1,
    isliked: false,
  },
  {
    title: "Inception",
    url: "https://i.pinimg.com/736x/de/d0/f9/ded0f912d97fe5f7d9f576a852c38d5e.jpg",
    key: 2,
    isliked: false,
  },
  {
    title: "Interstellar",
    url: "https://i.pinimg.com/736x/0f/2c/78/0f2c7867040559e7d019fcc836694328.jpg",
    key: 3,
    isliked: false,
  },
  {
    title: "Seven",
    url: "https://i.pinimg.com/736x/c1/33/b4/c133b4024bae02e62383d2327f80a84f.jpg",
    key: 4,
    isliked: false,
  },
  {
    title: "Fight Club",
    url: "https://i.pinimg.com/736x/a0/14/e0/a014e0d3db5c0b54dce35ffc410b84ad.jpg",
    key: 5,
    isliked: false,
  },
  {
    title: "The Dark Knight",
    url: "https://i.pinimg.com/736x/ac/d1/00/acd100e253b4da37c69f10d165aac244.jpg",
    key: 6,
    isliked: false,
  },
  {
    title: "The Matrix",
    url: "https://i.pinimg.com/736x/10/4a/a4/104aa454e9f451fe26f7ea4cbc28615c.jpg",
    key: 7,
    isliked: false,
  },
  {
    title: "Forrest Gump",
    url: "https://i.pinimg.com/736x/2e/6b/4e/2e6b4e00805a52d4429de175e0f97d61.jpg",
    key: 8,
    isliked: false,
  },
  {
    title: "Parasite",
    url: "https://i.pinimg.com/736x/31/cb/2e/31cb2ee5845d00a1cb14990f41114f49.jpg",
    key: 9,
    isliked: false,
  },
  {
    title: "Joker",
    url: "https://i.pinimg.com/736x/d7/65/0b/d7650b4e02e3cab476b5b96cd7b9de43.jpg",
    key: 10,
    isliked: false,
  },
];

    return (
      <div id="home-wrapper">
        <div className="movie-container">
          {data.map((movieData, index) => {
            return <Moviecard movie={movieData} key={index} />;
          })}
        </div>
      </div>
    );
}

export default Home