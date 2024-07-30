"use client";

import { UserButton } from "@clerk/nextjs";

 export const Navbar = () => {
    return (
        <div className="flex items-center gap-x-4 bg-green-700 h-28">
            <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
                {/* Todo: add search */}
                Search here
            </div>

            <UserButton/>
        </div>
    )
 }