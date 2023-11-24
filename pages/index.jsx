import { Header } from "../components/header/header";
import { GameInfo, GameTitle, GameField, GameSymbol } from "../components/game";
import { useState } from "react";
import { useGameState } from "/components/game/use-game-state";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(2);
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
        <UiModal
          width="md"
          isOpen={winnerSymbol}
          onClose={() => console.log("close")}
        >
          <UiModal.Header>Игра Завершена</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Победитель: <span className="text-teal-600">sem4ezz</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Вернуться
            </UiButton>
            <UiButton size="md" variant="primary">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
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
