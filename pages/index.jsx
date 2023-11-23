import { Header } from "../components/header/header";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { useState } from "react";
import { useGameState } from "/components/game/use-game-state";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentMove, handleCellClick, nextMove, winnerSequence } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
        />
        <GameField
          playersCount={playersCount}
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  );
}
