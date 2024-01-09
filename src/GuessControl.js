import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  //Create a state variable currentGuess with setter setCurrentGuess and default value of an empty string.
  const [currentGuess, setCurrentGuess] = useState("");

  //Create a handleInputChange function that updates the currentGuess state value when the user changes the value in the input. 
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  //Create a onSubmitGuess function that calls the onGuess prop with the currentGuess value converted to a number
  // and resets the currentGuess to an empty string when it is called.

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
export default GuessControl;
