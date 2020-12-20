import React, { useState } from "react";
import "./styles.css";

var citiDictionary = {
  Lucknow: ["Bistro 37", "The Big Chill"],
  Delhi: ["Diggin", "Ama's Cafe"],
  Bangalore: ["DYU Art Cafe", "Xoichi"]
};

var citiesWeKnow = Object.keys(citiDictionary);

export default function App() {
  var [recommendation1, setRecommendation1] = useState("");
  var [recommendation2, setRecommendation2] = useState("");

  function cityClickHandler(city) {
    if (city === "Lucknow") {
      recommendation1 = citiDictionary.Lucknow[0];
      recommendation2 = citiDictionary.Lucknow[1];

      setRecommendation1(recommendation1);
      setRecommendation2(recommendation2);
    }
    if (city === "Delhi") {
      recommendation1 = citiDictionary.Delhi[0];
      recommendation2 = citiDictionary.Delhi[1];

      setRecommendation1(recommendation1);
      setRecommendation2(recommendation2);
    }
    if (city === "Bangalore") {
      recommendation1 = citiDictionary.Bangalore[0];
      recommendation2 = citiDictionary.Bangalore[1];

      setRecommendation1(recommendation1);
      setRecommendation2(recommendation2);
    }
  }

  return (
    <div className="App">
      <h1>Foodie-Moodie</h1>
      <p>Today's mood. Check in cities-</p>

      {citiesWeKnow.map(function (city) {
        return (
          <button
            onClick={() => cityClickHandler(city)}
            className="button"
            //style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={city}
          >
            {city}
          </button>
        );
      })}
      <hr className="line"></hr>

      <li>
        <button className="recommend">{recommendation1}</button>
      </li>
      <li>
        <button className="recommend">{recommendation2}</button>
      </li>
    </div>
  );
}
