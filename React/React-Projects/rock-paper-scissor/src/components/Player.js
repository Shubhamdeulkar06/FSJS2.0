import React from "react";

import ActionIcon from "./ActionIcon";

function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div className="m-8 w-40 h-40 flex flex-col justify-evenly bg-white rounded-xl">
      <div className="text-sky-900 flex justify-around self-center">
        {action && <ActionIcon action={action} size={80} />}
      </div>
      <div className="bg-sky-900 text-white">{`${name}: ${score} `}</div>
    </div>
  );
}

export default Player;
