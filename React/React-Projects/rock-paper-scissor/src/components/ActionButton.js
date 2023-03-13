import React from "react";

import ActionIcon from "./ActionIcon";

function ActionButton({ action = "rock", onActionSelected }) {
  return (
    <button
      className="flex justify-center items-center m-2 w-16 h-16 bg-sky-900 px-4 py-1 text-sm text-white font-semibold rounded-full  hover:text-white hover:bg-sky-800 hover:border-transparent "
      onClick={() => onActionSelected(action)}
    >
      <ActionIcon action={action} size={20} />
    </button>
  );
}

export default ActionButton;
