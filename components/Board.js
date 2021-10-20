import react from "react";
import Square from "../components/Squares";

function Board() {
  return (
    <div className="mainGrid">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Board;
