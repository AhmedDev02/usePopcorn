import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./App-v3.js";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} color="red" maxRating={10} />
      <p>The movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*  <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
      defaultRating={4}
      reactive={true}
    />
    <StarRating reactive={true} size={20} color="blue" className />
    <Test />*/}
  </React.StrictMode>
);
