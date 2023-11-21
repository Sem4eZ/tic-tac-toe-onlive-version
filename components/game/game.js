import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { ResetButton } from "./reset-button";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
  } = useGameState();
  return (
    <div className="flex flex-col items-center w-96 mx-auto my-24 border border-black p-8">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-game-field grid-rows-game-field">
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
      <ResetButton onClick={handleResetClick} />
    </div>
  );
}
