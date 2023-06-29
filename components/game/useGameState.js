import { useState } from "react";
import computeWinner from "./computeWinner";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const useGameState = () => {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const handleClear = () => {
    const clearCells = [null, null, null, null, null, null, null, null, null];
    setCells(clearCells);
    setCurrentStep(SYMBOL_O);
    setWinnerSequence();
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleClear,
    winnerSymbol,
    isDraw,
  };
};

export default useGameState;
