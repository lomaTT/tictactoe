import styles from "../../styles/game.module.css";
import GameSymbol from "./GameSymbol";

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div className={styles["game-info"]}>Draw!</div>;
  }
  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }
  return (
    <div className={styles["game-info"]}>
      Turn: {!isDraw && <GameSymbol symbol={currentStep} />}
    </div>
  );
};

export default GameInfo;
