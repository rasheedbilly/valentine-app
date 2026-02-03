import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = () => {
    const top = Math.random() * 80 + "%";
    const left = Math.random() * 80 + "%";
    setNoPosition({ top, left });
  };

  const handleNoClick = () => {
    moveNoButton();
    setNoCount(noCount + 1);
    if (noCount >= 9) {
      setYesPressed(true);
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Try again",
      "Again",
      "And again..",
      "Fr tho",
      "Stop clicking no",
      "No beuno",
      "Está bien??",
      "Yes"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 relative flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/wfig9PYM-NYAAAAi/cool-meek-mill.gif" />
          <div className="my-4 text-4xl font-bold">Thats wassup</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/m5YbPD2d7bMAAAAm/serious-question-rich-benoit.webp"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Kayla?</h1>

          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
          </div>

          <button
            onClick={handleNoClick}
            className="absolute rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all"
            style={noPosition}
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </>
      )}
    </div>
  );
}

export default App