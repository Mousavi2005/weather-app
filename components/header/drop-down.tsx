import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuLabel
 } from "../ui/dropdown-menu";

export default function DropDown() {
    return (
    <DropdownMenu>
        <DropdownMenuTrigger className="w-[120px] h-10 px-2 hover:cursor-pointer flex items-center justify-between gap-4 bg-[hsl(243,27%,20%)] rounded-[10px]">
            <img src="/icons/icon-units.svg" alt="" />
            <span className="text-white">Units</span>
            <img src="/icons/icon-dropdown.svg" alt="" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-[hsl(243,27%,20%)] border-0 rounded-[10px]">
            <DropdownMenuItem className="text-white">Switch to Imperial</DropdownMenuItem>
            <DropdownMenuLabel className="text-[hsl(243,23%,40%)]">Tempereture</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem className="text-white">Celcius(C)</DropdownMenuItem>
                <DropdownMenuItem className="text-white">Fahrenheit(F)</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuLabel className="text-[hsl(243,23%,40%)]">Wind Speed</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem className="text-white">Km/h</DropdownMenuItem>
                <DropdownMenuItem className="text-white">mph</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuLabel className="text-[hsl(243,23%,40%)]">Preciption</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem className="text-white">Millimeters(mm)</DropdownMenuItem>
                <DropdownMenuItem className="text-white"></DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    )

}
