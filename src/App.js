import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const recommendations = [
    ["Attack On Titan", "Naruto", "One Piece"],
    ["Nana", "Special A", "Fruits Basket"],
    ["Chobits", "Codegeass", "Mononoke"],
    ["Hakuouki", "Usagi Drop", "Chihayafuru"],
    ["Anpanman", "Chinpui", "Pokemon"]
  ];

  const genreNames = ["Shonen", "Shojo", "Seinen", "Josei", "Kodomomuke"];

  const [itemIndex, setItemIndex] = useState(0);

  var genreList = genreNames.map(function (item, index) {
    return (
      <button
        key={index}
        style={{
          margin: "0.2rem",
          padding: "0.4rem",
          border: "1px solid black",
          borderRadius: "0.5rem",
          backgroundColor: "#dfe5f0",
          cursor: "pointer"
        }}
        onClick={() => setItemIndex(index)}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="App">
      <h2>
        <span>🐱‍👤</span> Anime Recommendation
      </h2>
      <p>Checkout my favorite animes. Select a genre to get started:</p>
      <div>{genreList}</div>
      <hr />
      <div>
        {recommendations[itemIndex].map(function (item, index) {
          return (
            <div
              style={{
                border: "1px solid black",
                borderRadius: "0.4rem",
                padding: "1rem",
                margin: "0.3rem"
              }}
              key={index}
            >
              {item}
              <div
                style={{
                  margin: "0.15rem"
                }}
              >
                {5 - index}/5
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
