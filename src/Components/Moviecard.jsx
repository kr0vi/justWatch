import React from "react";

function Moviecard({ movie }) {


    function onFavouriteClick() {
        console.log("favourited")
    }


  return (
    <div className="h-70 bg-[#edebdf] w-50 rounded-lg px-2 py-3 overflow-hidden movie-overlay">
      <div className="w-full h-full  flex items-center justify-center like-button">
        <button className="p-3 rounded-full text-white">🖤</button>
      </div>
      <div className="w-full h-[20%] flex justify-between items-center">
        <div className=" flex">
          <div className="h-2 w-2 bg-purple-900"></div>
          <div className="h-2 w-2 bg-sky-700"></div>
          <div className="h-2 w-2 bg-green-800"></div>
          <div className="h-2 w-2 bg-yellow-600"></div>
          <div className="h-2 w-2 bg-orange-600"></div>
        </div>
        <div className="h-4 w-4 border-1 flex items-center justify-center">
          <p className="text-[8px]">{movie.key}</p>
        </div>
      </div>
      <h3 className="font-black tracking-tighter leading-5 text-2xl w-40 text-[#30302e] mx-1 h-10">
        {movie.title}
      </h3>
      <div className="bg-teal-600 w-43 h-38 mx-auto my-2 rounded-md overflow-hidden movie-poster">
        <img
          src={movie.url}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Moviecard;
