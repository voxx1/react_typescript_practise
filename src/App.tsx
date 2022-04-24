import { useState } from "react";
import './App.css'
import PlayerList from "./components/PlayerList";
import NewPlayerForm from './components/NewPlayerForm'
import DUMMY_PLAYERS from "./DUMMY_DATA/DUMMY_PLAYERS";

export interface IState {
  players: {
    name: string;
    surname: string;
    age: number;
    note: string
  }[]
}



function App() {
  const [playersData, setPlayersData] = useState<IState["players"]>(DUMMY_PLAYERS);



  return (
    <div className="App">
      <h1>NBA Players List</h1>
      <PlayerList players={playersData} />
      <NewPlayerForm playersData={playersData} setPlayersData={setPlayersData} />
    </div>
  );
}

export default App;
