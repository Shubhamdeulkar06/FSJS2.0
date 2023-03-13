import React, { useState } from "react";
// import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import Player from "./components/Player";
import ActionButton from "./components/ActionButton";

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "You Win!",
    0: "Its a Tie!",
    1: "You Lose!",
  };
  return <h2 className="text-2xl text-white font-bold mt-8">{text[winner]}</h2>;
}
function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function caculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) {
    return 1;
  }
  return null;
}

function App() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");
  const [winner, setWinner] = useState("");

  const [playerScore, SetPlayerScore] = useState(0);
  const [computerScore, SetComputerScore] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();
    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = caculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      SetPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      SetComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold bg-sky-900 text-white h-20 py-4">
        Rock Paper Scissors
      </h1>
      <div>
        {/* container */}
        <div className="flex justify-center items-center">
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>
        {/* button group */}
        <div className="flex justify-center items-center">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <div className="flex justify-center items-center">
          <ShowWinner winner={winner} />
        </div>
      </div>
    </div>
  );
}

export default App;
