import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={5}
        color="green"
        size={30}
        onSetRating={setMovieRating}
      />
      <p>This movie rateed {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <Test />
    <StarRating
      maxRating={5}
      color="gold"
      messages={["Poor", "Average", "Okey", "Good", "Excellent"]}
    />
  </React.StrictMode>
);
