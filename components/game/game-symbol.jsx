import { SYMBOL_X, SYMBOL_O } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-400 text-3xl";
    if (symbol === SYMBOL_X) return "text-red-400 text-3xl";
    return "";
  };
  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
}
