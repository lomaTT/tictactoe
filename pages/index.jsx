import { Header } from "../components/Header"
import { GameInfo, GameTitle, GameField } from "../components/Game"

export default function HomePage() {
    // return <Game />;
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle />
                <GameInfo className="mt-4" />
                <GameField className="mt-6" />
            </main>
        </div>
    );
}
