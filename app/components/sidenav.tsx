import { PowerIcon, } from "lucide-react";
import Link from "next/link";
import NavLinks from "./nav-links";
import Image from "next/image";
import Profile from "../assets/profile.png"

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-800">
            <Link
                className=""
                href="/"
            >
            </Link>

            <div className="flex grow flex-col justify-between">
                <div className="space-y-2">
                    <div className="flex items-center space-x-4 mb-10">
                        <Image
                            src={Profile}
                            alt="profile picture"
                            className="h-20 w-20 rounded-full cursor-pointer"
                        />
                        <h2 className="text-white cursor-pointer">Excellent</h2>
                    </div>
                    <NavLinks/>
                </div>

                <form>
                    <button className="flex h-[48px] w-full grow items-center gap-2 rounded-md p-3 text-white text-sm font-medium hover:bg-slate-700">
                        <PowerIcon className="w-6"/>
                        <div>Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}


