import homeSideImage from "../../assets/images/dices.png";

interface StartPageProps{
  BtnClick:()=>void
}

const StartPage:React.FC<StartPageProps> = ({ BtnClick }) => {
  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 place-items-center mt-20 px-10">
        <div>
          <img
            src={homeSideImage}
            alt="dices"
            className="w-full max-lg:w-full max-lg:h-100 max-md:h-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-8xl font-medium max-xl:text-7xl max-sm:text-5xl">DICE GAME</h2>
          <div className="flex justify-end max-lg:justify-center my-4">
            <button
              className="bg-black text-sm font-medium rounded-sm text-white w-48 px-7 py-1.5 hover:cursor-pointer border hover:border-black hover:bg-white hover:text-black transition-colors duration-400"
              onClick={BtnClick}
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
