'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {LogOut} from "lucide-react";
import Navitems from "@/components/Navitems";


const UserDropdown = () => {

    const router = useRouter();
    const handleSignOut = async() => {
        router.push("/sign-in");
    }

    //dummy user for testing. delete later
    const user = {name: "Alexander", email: "alexander@gmail.com"};

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className={"h-8 w-8"}>
                        {/* modify src from default later*/}
                        <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGMWxIOeg9-PQ/profile-displayphoto-shrink_800_800/B56ZSjJWdsGQAc-/0/1737903926047?e=1768435200&v=beta&t=bqxYB14sXB9w9OIgnUJlN_HRJKyx8cZsLSFzh9LXTME" />
                        <AvatarFallback className={"bg-yellow-500 text-black text-sm font-bold"}>
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className={"hidden md:flex flex-col items-start"}>
                        <span className={" text-base font-medium text-gray-400"}>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"text-gray-400"}>
                <DropdownMenuLabel>
                    <div className={"flex relative items-center gap-3 py-2"}>
                        <Avatar className={"h-10 w-10"}>
                            {/* modify src from default later*/}
                            <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGMWxIOeg9-PQ/profile-displayphoto-shrink_800_800/B56ZSjJWdsGQAc-/0/1737903926047?e=1768435200&v=beta&t=bqxYB14sXB9w9OIgnUJlN_HRJKyx8cZsLSFzh9LXTME" />
                            <AvatarFallback className={"bg-yellow-500 text-black text-sm font-bold"}>
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className={"flex flex-col"}>
                        <span className={" text-base font-medium text-gray-400"}>
                            {user.name}
                        </span>
                            <span className={"text-sm text-gray-500"}>
                            {user.email}
                        </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className={"bg-gray-600"}/>
                <DropdownMenuItem onClick={handleSignOut} className={"text-gray-100 text-md font-medium focus:bg-transparent focus: text-yellow-500 transition-colors"}>
                    <LogOut className={"h-4 w-4 mr-2 hidden sm:block"}/>
                    Log Out
                </DropdownMenuItem>
                <DropdownMenuSeparator className={"hidden sm:block bg-gray-600"}/>
                <nav className={"sm:hidden"}>
                    <Navitems />
                </nav>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
