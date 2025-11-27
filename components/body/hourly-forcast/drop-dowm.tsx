import { DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent
 } from "@/components/ui/dropdown-menu";

 export default function HourlyDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-[hsl(243,23%,30%)] w-22 h-8 rounded-md">today</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[hsl(243,27%,25%)] text-white border-0">
                <DropdownMenuItem>Monday</DropdownMenuItem>
                <DropdownMenuItem>Tuesday</DropdownMenuItem>
                <DropdownMenuItem>Wednesday</DropdownMenuItem>
                <DropdownMenuItem>Thursday</DropdownMenuItem>
                <DropdownMenuItem>Friday</DropdownMenuItem>
                <DropdownMenuItem>Saturday</DropdownMenuItem>
                <DropdownMenuItem>sunday</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
 }
