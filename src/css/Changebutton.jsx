// import React, { useState } from "react";

// const Changebutton = () => {
//     const [active, setActive] = useState(false);
//     const onClick = () => {
//         setActive(!active);
//     };
//     return (
//         <div>
//             <button style={{ width: 500, height:200 , fontSize: 100, border: 5, backgroundColor: "yellow" }} onClick={onClick}>
//                 {active ? "ON" : "OFF"}
//             </button>
//         </div>
//     );
// };

// export default Changebutton;
// import { GiSharpSmile } from "react-icons/gi";
// <GiSharpSmile />



// import React, { useState } from "react";

// const movies = [
//   // Example movie data
//   { id: 1, title: "Avengers", image: "src/assets/avengers.jpg" },
//   { id: 2, title: "thor: love thunder", image: "src/css/thor.jpg" },
//     { id: 3, title: "iron man 3", image: "src/assets/ironman.jpg" },
//     { id: 4, title: "spider man", image: "src/css/spider-man.jpg" },

// ];

// const MovieCard = ({ movie }) => {
//   const [likes, setLike] = useState(true);
//   const [dislikes, setDislike] = useState(false);

//   return (
//     <div style={{ margin: 20, border: "1px solid #ccc", padding: 20 }}>
//       <img src={movie.image} alt={movie.title} style={{ width: 200, height: 300 }} />
//       <h2>{movie.title}</h2>
//       <div>
//         <button
//           style={{
//             width: 100,
//             height: 50,
//             fontSize: 20,
//             backgroundColor: "green",
//             color: "white",
//             marginRight: 10,
//           }}
//           onClick={() => setLike(like)}
//           src={likes ? "src/css/like.png" : "src/css/like.png"}
//         >
//           like: {likes}
//         </button>
//         <button
//           style={{
//             width: 100,
//             height: 50,
//             fontSize: 20,
//             backgroundColor: "red",
//             color: "white",
//           }}
//           onclick={()=>setDislike(dislike)}
//           src={likes ? "src/css/like.png" : "src/css/like.png"}
//         >
//       unlike: {dislike}
//         </button>
//       </div>
//     </div>
//   );
// };

// const MovieList = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;


import React, { useState } from "react";

const movies = [
  // Example movie data
  { id: 1, title: "Avengers", image: "src/assets/avengers.jpg" },
  { id: 2, title: "thor: love thunder", image: "src/css/thor.jpg" },
  { id: 3, title: "iron man 3", image: "src/assets/ironman.jpg" },
  { id: 4, title: "spider man", image: "src/css/spider-man.jpg" },
];

const MovieCard = ({ movie }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ margin: 20, border: "1px solid #ccc", padding: 20 }}>
      <img src={movie.image} alt={movie.title} style={{ width: 200, height: 300 }} />
      <h2>{movie.title}</h2>
      <div>
        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 20,
            backgroundColor: "green",
            color: "white",
            marginRight: 10,
            display: "flex",

          }}
          onClick={() => setLikes(likes + 1)}
        >
          <img src="src/assets/like.png" alt="Like" style={{ width: 20, height: 20, marginRight: 5 }} />
          like{likes}
        </button>
        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 20,
            backgroundColor: "red",
            color: "white",
            display: "flex",
           
          }}
          onClick={() => setDislikes(dislikes + 1)}
        >
          <img src="src/assets/dislike.png" alt="Dislike" style={{ width: 20, height: 20, marginRight: 5 }} />
          dislike{dislikes}
        </button>
      </div>
    </div>
  );
};

const MovieList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;