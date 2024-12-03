'use client'

import Button from "../Button"

export default function SignupForm() {

    return (
        <div className="bg-slate-800 h-full w-full max-h-[27rem] max-w-[24rem] mt-8 rounded-lg">
                <div className="px-4 py-4">
                    <h3 className="text-white text-xl font-semibold">Sign up</h3>

                    <form className="mt-4 flex flex-col">
                        <div className="space-y-3">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="name"
                                />
                            </div>

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
                            <Button label="Sign up"/>
                        </div>
                    </form>
                </div>
            </div>
    )
}