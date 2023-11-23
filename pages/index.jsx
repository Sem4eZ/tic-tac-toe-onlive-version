import { Header } from "../components/header/header";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { useState } from "react";

export default function HomePage() {
  const [playersCount] = useState(3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" />
        <GameField playersCount={playersCount} className="mt-6" />
      </main>
    </div>
  );
}
