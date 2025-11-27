import DropDown from "./drop-down"

export default function Header() {
    return (
        <header className="w-full h-[8%] px-10 flex items-center justify-between">
            <img src="/icons/logo.svg" alt="logo" />
            <DropDown></DropDown>
        </header>
    )
}
