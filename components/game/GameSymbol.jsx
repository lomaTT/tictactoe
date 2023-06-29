import { CircleIcon } from "./Icons/CircleIcon";
import { SquareIcon } from "./Icons/SquareIcon";
import { TriangleIcon } from "./Icons/TriangleIcon";
import { CrossIcon } from "./Icons/CrossIcon";
import { GAME_SYMBOLS } from "./constrants";


export function GameSymbol({ symbol, className }) {
    const Icon = {
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.ZERO]: CircleIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
        [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    }[symbol] ?? CrossIcon;
    return <Icon className={className} />;
}