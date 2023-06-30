import { Header } from "../components/Header"
import { GameInfo, GameTitle, GameField } from "../components/Game"
import { useState } from "react";

// const playersCount = 2;

export default function HomePage() {
    // return <Game />;

    const [playersCount] = useState(4);
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount} />
                <GameInfo playersCount={playersCount} className="mt-4" />
                <GameField playersCount={playersCount} className="mt-6" />
            </main>
        </div>
    );
}
