import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../Profile";
import { ArrowDownIcon } from "./Icons/ArrowDownIcon";
import { UiButton } from "../UiKit/UiButton"

export function Header() {
    return (
        <header className="flex h-24 items-center px-8 bg-white shadow-lg">
            <Image src={logoSrc} alt="logo" />
            <div className="w-px h-8 bg-slate-200 mx-6" />
            <UiButton className="w-44" variant="primary" size="lg">Play</UiButton>
            {/* <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tigth">Play</button> */}
            <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors w-lg">
                <Profile name={"llleshik"} rating={322} />
                <ArrowDownIcon />
            </button>
        </header>
    );
}