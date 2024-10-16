'use client'
import { Search } from 'lucide-react';


export default function SearchTask() {
    return (
        <div className='relative flex flex-1 flex-shrink-0'>
            <label htmlFor="search" className='sr-only'>Search</label>

            <input
                className='peer block w-full rounded-md py-[9px] pl-10 text-sm outline-none placeholder:text-gray-300 text-gray-500'
                placeholder='search tasks...'
            />
            <Search
                className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'
            />
        </div>
    )
}