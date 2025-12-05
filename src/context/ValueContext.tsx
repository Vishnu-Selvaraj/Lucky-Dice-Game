import {  createContext, useContext, useState } from "react";

interface ValueContextType{
    selectedRowNumber:number,
    selectedDiceNumber:number,
    score:number,
    error:string,
    setRowNumber:(value:number)=>void,
    generateRandomDiceNumber:()=>void,
    setScore:(diceVal:number)=>void,
    setResultScore:React.Dispatch<React.SetStateAction<number>>,
}

interface ValueProviderProps {
    children:React.ReactNode
}

const ValueContext = createContext<ValueContextType | null>(null);

export const ValueProvider = ({ children }:ValueProviderProps) => {
  const [selectedRowNumber, setSelectedRowNumber] = useState<number>(0);
  const [selectedDiceNumber, setSelectedDiceNumber] = useState<number>(1);
  const [score, setResultScore] = useState<number>(0);
  const [error,setError] = useState<string>('')

  const setRowNumber = (value:number) => {
    console.log(value,'Row value')
    setSelectedRowNumber(value);
  };

  const generateRandomDiceNumber = () => {
    if(!selectedRowNumber){
        setError('You have to select a number before rolling dices.')
    }else{
        let randNum = Math.floor(Math.random() * (7 - 1) + 1);
        setSelectedDiceNumber(randNum);
        setScore(randNum)
        setError('')
    }
  };

  const setScore = (diceVal:number) => {
    // console.log('row',selectedRowNumber,diceVal)
    if (selectedRowNumber === diceVal) {
      setResultScore((prev) => prev + diceVal);
    } else {
      setResultScore((prev) => prev - 2);
    }
    setRowNumber(0)
  };

  return (
    <ValueContext.Provider
      value={{
        selectedRowNumber,
        selectedDiceNumber,
        score,
        error,
        setRowNumber,
        generateRandomDiceNumber,
        setScore,
        setResultScore,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useValue must be used within a ValueProvider");
  }
  return context;
};
