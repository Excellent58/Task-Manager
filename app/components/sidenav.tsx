import { PowerIcon, } from "lucide-react";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-700">
            <Link
                className=""
                href="/"
            >
            </Link>

            <div className="flex grow flex-col justify-between">
                <div className="space-y-2">
                    <div>
                        <img src="" alt="profile pic" />
                    </div>
                    <NavLinks/>
                </div>

                <form>
                    <button className="flex h-[48px] w-full grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
                        <PowerIcon className="w-6"/>
                        <div>Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}


