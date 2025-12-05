import { useValue } from "../../../context/ValueContext";

const NumberRow = () => {
  const dicesNum: number[] = [1, 2, 3, 4, 5, 6];
  const { selectedRowNumber, setRowNumber, error } = useValue();

  return (
    <div>
      <div className="flex justify-center max-lg:justify-center w-full py-4 max-lg:pt-7">
        <p className="text-red-500">{error}</p>
      </div>
      <div className="flex justify-center max-lg:pt-2">
        {dicesNum.map((num, ind) => {
          return (
            <div
              className={`border border-black ${
                selectedRowNumber == num ? "bg-black text-white" : ""
              } w-fit h-fit mx-2 px-4 py-2 cursor-pointer shadow-sm rounded-sm`}
              key={ind}
              onClick={() => setRowNumber(num)}
            >
              <p>{num}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center max-lg:w-full pt-3">
        <p className="text-lg font-medium">Select a Number</p>
      </div>
    </div>
  );
};

export default NumberRow;
