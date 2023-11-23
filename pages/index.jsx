import { Header } from "../components/header/header";
import { GameInfo, GameTitle, GameField, GameSymbol } from "../components/game";
import { useState } from "react";
import { useGameState } from "/components/game/use-game-state";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />{" "}
        {winnerSymbol && (
          <div className="flex items-center mt-4">
            Победитель:
            <GameSymbol symbol={winnerSymbol} className="mx-3 w-5 h-5" />
          </div>
        )}
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
