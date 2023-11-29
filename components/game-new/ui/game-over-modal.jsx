import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";
import { useState, useEffect } from "react";

export function GameOverModal({ winnerName, players, onRestartGame }) {
  const [isModalOpen, setIsModalOpen] = useState(!!winnerName);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsModalOpen(!!winnerName);
  }, [winnerName]);

  return (
    <UiModal width="md" isOpen={isModalOpen} onClose={handleCloseModal}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        {winnerName && (
          <div className="text-sm">
            Победитель: <span className="text-teal-600">{winnerName}</span>
          </div>
        )}
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">
          {players}
        </div>
      </UiModal.Body>
    </UiModal>
  );
}
