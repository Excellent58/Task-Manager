'use client'

import { HomeIcon, CheckIcon, ListTodoIcon, ClipboardList } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'All Tasks', href: '/', icon: HomeIcon },
    { name: 'Important', href: '/important', icon: ListTodoIcon },
    { name: 'Completed', href: '/completed', icon: CheckIcon },
    { name: 'Do It Now', href: '/incomplete', icon: ClipboardList },
]

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
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
                        >
                            <LinkIcon className="w-6"/>
                            <p>{link.name}</p>
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default NavLinks;