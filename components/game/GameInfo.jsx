import clsx from "clsx";
import { Profile } from "../Profile";
import { CrossIcon } from "./Icons/CrossIcon";
import { GameSymbol } from "./GameSymbol";
import { GAME_SYMBOLS } from "./constrants";

import avatar from "./images/avatar.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";

const players = [
    { id: 1, name: 'llleshik', rating: 322, avatar: avatar, symbol: GAME_SYMBOLS.CROSS },
    { id: 2, name: 'marfdsfsfdidsfdsfsdfssle', rating: 258, avatar: avatar2, symbol: GAME_SYMBOLS.SQUARE },
    { id: 3, name: 'fake', rating: 323, avatar: avatar3, symbol: GAME_SYMBOLS.TRIANGLE },
    { id: 4, name: 'andrew', rating: 246, avatar: avatar4, symbol: GAME_SYMBOLS.ZERO },

];

export function GameInfo({ className, playersCount }) {
    return (
        <div
            className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3")}
        >
            {players.slice(0, playersCount).map((player, index) => <PlayerInfo key={player.id} playerInfo={player} isRight={index % 2 === 1}></PlayerInfo>)}
            {/* GameInfo */}

            {/* <div className="flex gap-3 items-center">
                <div className="text-orange-900 text-lg font-semibold">00:08</div>
                <div className="h-6 w-px bg-slate-200" />
                <div className="relative">
                    <Profile className="w-44" />
                    <div className="w-5 h-5 rounded-full flex
                        bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                        <CrossIcon />
                    </div>
                </div> */}


            {/* </div> */}
        </div >
    );
}

function PlayerInfo({ playerInfo, isRight }) {
    return (
        <div className="flex gap-3 items-center">
            <div className={clsx("relative", isRight && "order-3")}>
                <Profile
                    className="w-44"
                    name={playerInfo.name}
                    rating={playerInfo.rating}
                    avatar={playerInfo.avatar}
                />
                <div className="w-5 h-5 rounded-full flex
                        bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                    <GameSymbol symbol={playerInfo.symbol} />
                </div>
            </div>
            <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
            <div className="text-slate-900 text-lg font-semibold">01:08</div>
        </div>
    );
}