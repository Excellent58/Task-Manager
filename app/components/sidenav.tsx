'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon, CheckIcon, ListTodoIcon, ClipboardList } from "lucide-react";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Profile from "../assets/profile.png"
import { PowerIcon } from "lucide-react"
import { LogOut } from "../lib/actions";


const links = [
    { name: 'All Tasks', href: '/', icon: HomeIcon },
    { name: 'Important', href: '/important', icon: ListTodoIcon },
    { name: 'Completed', href: '/completed', icon: CheckIcon },
    { name: 'Do It Now', href: '/incomplete', icon: ClipboardList },
]

export default function SideNav() {
    const [IsOpen, setOpen] = useState(false)
    const pathname = usePathname();
    const sidebarRef = useRef<HTMLDivElement>(null);

    

    useEffect(() => {
        const handleClickOutside =(event: MouseEvent)=> {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        if(IsOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [IsOpen])

    useEffect(() => {
        const handleResize =()=> {
            if(IsOpen && window.innerWidth >= 768) {
                setOpen(false)
            }
        };

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [IsOpen])

    return (
        <>
            <nav className="fixed top-0 left-0 z-40 bg-slate-800 w-full md:hidden">
                <div className="flex items-center space-x-40 h-[60px]">
                    <Image
                        src={Profile}
                        alt="control"
                        className="h-10 w-10 rounded-full ml-1 cursor-pointer flex items-center"
                        onClick={()=>setOpen(!IsOpen)}
                    />

                    <h2 className="text-white text-lg flex">Task manager</h2>
                </div>
            </nav>
            
            <div 
                className={`fixed md:relative top-0 left-0 z-40 w-64 bg-slate-800 transition-transform -translate-x-full md:translate-x-0 ${IsOpen ? "translate-x-0": "-translate-x-full"} `}
                ref={sidebarRef}
            >
                <div className="flex grow flex-col h-screen justify-between">
                    <div className="space-y-2 m-3">
                        <div className="flex items-center space-x-4 mb-10">
                            <Image
                                src={Profile}
                                alt="profile picture"
                                className="h-20 w-20 rounded-full cursor-pointer"
                            />
                            <h2 className="text-white cursor-pointer">Excellent</h2>
                        </div>
                        
                        {links.map((link) => {
                            const LinkIcon = link.icon

                            return (
                                <>
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            'flex h-[48px] grow items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-slate-700 text-white',
                                            {'bg-slate-700 text-blue-300': pathname === link.href,},
                                        )}
                                        onClick={()=> setOpen(false)}
                                    >
                                        <LinkIcon className="w-6"/>
                                        <p>{link.name}</p>
                                    </Link>
                                </>
                            )
                        })}
                    </div>

                    <form 
                        action={LogOut}
                        className="m-3"
                    >
                        <button className="flex h-[48px] w-full grow items-center gap-2 rounded-md p-3 text-white text-sm font-medium hover:bg-slate-700">
                            <PowerIcon className="w-6"/>
                            <div>Sign Out</div>
                        </button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}


