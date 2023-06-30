import Link from "next/link";
import { ArrowLeftIcon } from "./Icons/ArrowLeftIcon";
import { StarIcon } from "./Icons/StarIcon";
import { UserIcon } from "./Icons/UserIcon";
import { TimeIcon } from "./Icons/TimeIcon";

export function GameTitle({ playersCount }) {
    return (
        <div className="pl-2">
            <Link href="#" className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
                <ArrowLeftIcon />
                To main page
            </Link>
            <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
            <div className="flex items-center gap-3 text-xs text-slate-400">
                <StarIcon />

                <div className="flex items-center gap-1">
                    <UserIcon />{playersCount}
                </div>

                <div className="flex items-center gap-1">
                    <TimeIcon />1 min on turn
                </div>

            </div>
        </div>
    );
}