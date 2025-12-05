import { useValue } from "../../../context/ValueContext";
import { useRef } from "react";
import dice_1 from "../../../assets/images/dice_1.png";
import dice_2 from "../../../assets/images/dice_2.png";
import dice_3 from "../../../assets/images/dice_3.png";
import dice_4 from "../../../assets/images/dice_4.png";
import dice_5 from "../../../assets/images/dice_5.png";
import dice_6 from "../../../assets/images/dice_6.png";
import rollDiceAudio from '../../../assets/audio/dice-roll.mp3'

interface Props {
  showRule: boolean;
  setRuleState: React.Dispatch<React.SetStateAction<boolean>>;
}

const RollDices = ({ setRuleState, showRule }: Props) => {
  const { generateRandomDiceNumber, selectedDiceNumber, setResultScore } =
    useValue();

    const audioRef = useRef<HTMLAudioElement | null>(null);

  const diceImages: Record<number, string> = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  const handleDiceClick = ()=>{
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart sound each click
      audioRef.current.play();
    }
    setTimeout(()=>{
      generateRandomDiceNumber()
    },200)
  }

  return (
    <section className="pt-10 flex flex-col items-center">
      {/* AUDIO TAG */}
      <audio ref={audioRef} src={rollDiceAudio} preload="auto" />
  
      <img
        src={`${diceImages[selectedDiceNumber]}`}
        alt={`dice_${selectedDiceNumber}`}
        className="w-50 h-50 cursor-pointer"
        onClick={handleDiceClick}
      />
      <h6 className="font-medium text-xl py-3">Click On Dice to Roll</h6>
      <button
        className="bg-white my-2.5 font-medium text-sm rounded-sm text-black w-42 px-7 py-1.5 hover:cursor-pointer border hover:border-black hover:bg-black hover:text-white transition-colors duration-400"
        onClick={() => setResultScore(0)}
      >
        Reset Score
      </button>
      <button
        className="bg-black text-sm font-medium rounded-sm text-white w-42 px-7 py-1.5 hover:cursor-pointer border hover:border-black hover:bg-white hover:text-black transition-colors duration-400"
        onClick={() => setRuleState(!showRule)}
      >
        show Rules
      </button>
    </section>
  );
};

export default RollDices;
