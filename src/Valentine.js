import React, { useState, useEffect } from "react";
import CuteCat from "./images/cute-cat.gif"; // Import the GIF file
import VDay from "./images/vday-image.webp";
import VDay2 from "./images/vday-image-2.webp";
import VDay3 from "./images/vday-image-3.webp";

import Italian from "./images/buca-osteria.jpeg";
import Ramen from "./images/ramen.jpeg";
import French from "./images/french-beef.jpeg";
import Chinese from "./images/chinese.jpeg";
import BeefSoup from "./images/beef-noodle-soup.jpeg";
import Ramen2 from "./images/ramen-2.jpeg";
import Indian from "./images/indian.jpeg";
import AloBar from "./images/alobar.jpeg";

const SelectedRestaurant = () => {
  const [justKidding, setJustKidding] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJustKidding(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (!justKidding) {
    return (
      <>
        <h2 style={{ color: "#FF69B4" }}>You've selected.. RAMEN</h2>

        <img
          src={Ramen}
          style={{
            maxWidth: "100%",
            width: "300px",
            marginTop: '50px',
            margin: "10px 0",
            animation: "rotate 2s infinite linear",
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <h2 style={{ color: "#FF69B4" }}>
          Just kidding, we're going to Osteria (You had no choice)
        </h2>

        <img
          src={Italian}
          style={{ maxWidth: "100%", margin: "10px 0", width: "500px" }}
        />
      </>
    );
  }
};

const ButtonComponent = () => {
  const [counter, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState("valentine"); // New state to manage pages: 'valentine', 'thankYou', 'destination', 'selectedDestination', 'finale'

  const places = [
    { name: "Italian", image: Italian },
    { name: "Ramen", image: Ramen },
    { name: "French bouef", image: French },
    { name: "Chinese dong po rou", image: Chinese },
    { name: "Beef noodle soup", image: BeefSoup },
    { name: "More Ramen", image: Ramen2 },
    { name: "Indian", image: Indian },
    { name: "A la cart cocktail bar", image: AloBar },
  ]; // Replace with actual image paths

  const noButtonMessages = [
    "no",
    "are you sure?",
    "really!?",
    "come on sista",
    "pretty please?",
    "fineee :'(",
  ];

  const handleNoClick = () => {
    if (counter < noButtonMessages.length) {
      setCounter(counter + 1);
    }
  };

  // Return early to show the Thank You page if showThankYou is true
  if (currentPage === "thankYou") {
    return (
      <div style={{ textAlign: "center", color: "#e75480" }}>
        <h1>Yay!</h1>
        <img
          src={CuteCat}
          alt="cutie"
          style={{ maxWidth: "100%", margin: "10px 0" }}
        />
        <div>
          {" "}
          {/* Encapsulate the Next button for additional styling if necessary */}
          <button
            style={{
              backgroundColor: "pink",
              color: "white",
              margin: "10px",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.5em",
            }}
            onClick={() => {
              setCurrentPage("destination");
            }}
          >
            Click me phrease
          </button>
        </div>
      </div>
    );
  } else if (currentPage === "destination") {
    return (
      <div style={{ textAlign: "center", color: "#e75480" }}>
        <h1>Where do you want to eat?</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", // Creates a responsive grid
            gap: "15px", // Space between items
            padding: "30px",
            width: "50%",
            margin: "0 auto",
          }}
        >
          {places.map((place, index) => (
            <div
              key={index}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => {
                setCurrentPage("selectedDestination");
              }}
            >
              <img
                src={place.image}
                style={{
                  maxWidth: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <label
                style={{
                  display: "block",
                  marginTop: "5px",
                  fontWeight: "bold",
                }}
              >
                {place.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (currentPage === "selectedDestination") {
    return (
      <div style={{ textAlign: "center", color: "#e75480" }}>
        <h1>Yayayayayya!</h1>
        <SelectedRestaurant />

        <div>
          <button
            style={{
              backgroundColor: "#FF5733",
              color: "white",
              margin: "10px",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.5em",
            }}
            onClick={() => {
              setCurrentPage("finale");
            }}
          >
            Click me next!!
          </button>
        </div>
      </div>
    );
  } else if (currentPage === "finale") {
    // Final with with thank you gif
    return (
      <div style={{ textAlign: "center", color: "#e75480" }}>
        <h1>See you then babbeee!</h1>
        <img
          src={VDay}
          alt="valentine"
          style={{ maxWidth: "500px", margin: "10px 0" }}
        />
        <img
          src={VDay3}
          alt="valentine"
          style={{ maxWidth: "500px", margin: "10px 0" }}
        />
      </div>
    );

  } else {
    return (
      <div style={{ textAlign: "center", color: "#e75480" }}>
        <h2>Will you be my valentine?</h2>

        <div>
          <img src={VDay2} alt="valentine" style={{ width: 300 }} />
        </div>

        {/* Show the yes button*/}
        <button
          style={{
            backgroundColor: "pink",
            color: "white",
            margin: "10px",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            fontSize: counter * 2 + 1 + "em",
          }}
          onClick={() => {
            setCurrentPage("thankYou"); // Navigate to the Thank You page
            setCounter(0); // Reset counter for any future logic or use
          }}
        >
          Yes
        </button>

        {/* Show the No button*/}
        {counter < noButtonMessages.length && (
          <button
            style={{
              backgroundColor: "grey",
              color: "white",
              margin: "10px",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleNoClick}
          >
            {noButtonMessages[counter]}
          </button>
        )}
      </div>
    );
  }
};

export default ButtonComponent;
