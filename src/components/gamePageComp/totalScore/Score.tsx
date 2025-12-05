import { useValue } from "../../../context/ValueContext";

const Score = () => {
    const {score} = useValue()
  return (
    <section className="flex flex-col items-center max-lg:items-center">
      <p className="text-5xl font-medium">{score}</p>
      <h6 className="text-xl">Total Score</h6>
    </section>
  );
};

export default Score;
