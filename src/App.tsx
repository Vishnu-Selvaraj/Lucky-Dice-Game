import { useState } from "react";
import StartPage from "./components/landingPage/StartPage";
import { ValueProvider } from "./context/ValueContext";
import PlayGamePage from "./pages/PlayGamePage";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const BtnClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="relative">
      {isClicked ? (
        <ValueProvider>
          <PlayGamePage />
        </ValueProvider>
      ) : (
        <StartPage BtnClick={BtnClick} />
      )}
    </div>
  );
}

export default App;
