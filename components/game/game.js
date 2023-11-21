import {GameCell} from './game-cell'
import {GameInfo} from './game-info'
import styles from './game.module.css'
import { useGameState } from './use-game-state';

export function Game() {

    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleResetClick,
        winnerSymbol,
        isDraw
    } = useGameState();
    return (
        <div className={styles["game"]}>
            <GameInfo 
            isDraw={isDraw} 
            winnerSymbol={winnerSymbol}
            currentStep={currentStep}
            />
            <div className={styles["game-field"]}>
                {cells.map((symbol, index) => {
                    return (
                        <GameCell
                        symbol={symbol} 
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                        />
                        )
                })}
            </div>
            <button className={styles["game-restart"]} onClick={() => handleResetClick()}>
                {winnerSequence ? 'Начать заново' : 'Сбросить'}
            </button>
        </div>
        
    )
}