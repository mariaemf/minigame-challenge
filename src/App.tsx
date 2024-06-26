import { GlobalStyles, WrapperComponents } from "./GlobalStyled";
import Header from "./components/Header/Header";
import GameStartScreen from "./components/GameStartScreen/GameStartScreen";
import PlayerProfile from "./components/PlayerProfile/PlayerProfile";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <WrapperComponents>
        <PlayerProfile />
        <GameStartScreen />
      </WrapperComponents>
    </>
  );
}

export default App;
