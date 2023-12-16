import { Route, Outlet, Routes } from "react-router-dom";
import Header from "./Header"
import Main from "./Main";
import Rating from "./Rating";
import ActivePlayers from "./ActivePlayers";
import GameHistory from "./GameHistory";
import ListOfPlayers from "./ListOfPlayers";
import Authorization from "./Authorization";

export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Routes path="/" element={<Header />}>
        <Route path="main" element={<Main />} />
        <Route path="rating" element={<Rating />} />
        <Route path="activePlayers" element={<ActivePlayers/>}/>
        <Route path="gameHistory" element={<GameHistory/>}/>
        <Route path="listOfPlayers" element={<ListOfPlayers/>}/>
        <Route path="/" element={<Authorization/>}/>
      </Routes>
    </div>
  );
}
