import { GameSymbol } from "./game-symbol"
import styles from './game.module.css'

export function GameCell({isWinner, onClick, symbol, index}) {
    return (
      <button 
        key={index} 
        className={`styles["cell"] ${isWinner ? styles["cell-win"] : ''}`} 
        onClick={onClick}>
        {symbol ? <GameSymbol symbol={symbol}/> : null}</button>
    )
}