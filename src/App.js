import "./styles.css";
import Board from "../components/Board";
import Header from "../components/Header";
import Player from "../components/Player";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer="x" />
      <Player whichPlayer="o" />
      <Board />
    </div>
  );
}
