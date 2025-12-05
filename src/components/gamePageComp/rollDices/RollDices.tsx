import { useValue } from "../../../context/ValueContext";

interface Props {
  showRule:boolean,
  setRuleState: React.Dispatch<React.SetStateAction<boolean>>;
}

const RollDices = ({ setRuleState,showRule }: Props) => {
  const { generateRandomDiceNumber, selectedDiceNumber, setResultScore } =
    useValue();

  return (
    <section className="pt-10 flex flex-col items-center">
      <img
        src={`/src/assets/images/dice_${selectedDiceNumber}.png`}
        alt="dice"
        className="w-50 h-50 cursor-pointer"
        onClick={generateRandomDiceNumber}
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
        onClick={()=>setRuleState(!showRule)}
      >
        show Rules
      </button>
    </section>
  );
};

export default RollDices;
