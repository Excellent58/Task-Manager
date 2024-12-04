'use client'

import Button from "../Button"
import Link from "next/link"

export default function LoginForm() {

    return (
        <div className="bg-slate-800 h-full w-full max-h-[24rem] max-w-[24rem] mt-8 rounded-lg">
                <div className="px-4 py-4">
                    <h3 className="text-white text-xl font-semibold">Login</h3>

                    <form className="mt-4 flex flex-col">
                        <div className="space-y-3">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button label="login"/>
                        </div>

                        <p className="text-white mt-2">Not Registered? <Link href="/signup" className="text-blue-400">sign up</Link></p>
                    </form>
                </div>
            </div>
    )
}