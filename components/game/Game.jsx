import styles from "../../styles/game.module.css";
import useGameState from "./useGameState";
import GameInfo from "./GameInfo";
import GameCell from "./GameCell";

export default function Game() {
    // const [state, setState] = React.useState(SYMBOL_O);
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleClear,
        winnerSymbol,
        isDraw,
    } = useGameState();
    // const isWinner = winnerSequence?.includes(index);
    return (
        <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
                {cells.map((symbol, index) => {
                    return (
                        <GameCell
                            key={index}
                            symbol={symbol}
                            isWinner={winnerSequence?.includes(index)}
                            onClick={() => handleCellClick(index)}
                        />
                    );
                })}
            </div>
            <button className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded" onClick={handleClear}>
                Clear
            </button>
        </div>
    );
}
