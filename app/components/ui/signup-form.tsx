'use client'

import Button from "../Button"
import Link from "next/link"
import { createAccount } from "@/app/lib/actions"
import { useActionState } from "react";
import {userState} from "@/app/lib/actions"

export default function SignupForm() {
    const initialState: userState = {message: null, errors: {}}
    const [state, formAction] = useActionState(createAccount, initialState)

    return (
        <div className="bg-slate-800 h-full w-full max-h-[30rem] max-w-[24rem] mt-8 rounded-lg">
                <div className="px-4 py-4">
                    <h3 className="text-white text-xl font-semibold">Sign up</h3>

                    <form 
                        action={formAction}
                        className="mt-4 flex flex-col"
                    >
                        <div className="space-y-3">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="name"
                                    aria-describedby="name-error"
                                />

                                <div id="name-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.name &&
                                        state.errors.name.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Email"
                                    aria-describedby="email-error"
                                />

                                <div id="email-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.email &&
                                        state.errors.email.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Password"
                                    aria-describedby="password-error"
                                />

                                <div id="password-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.password &&
                                        state.errors.password.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button label="Sign up"/>
                        </div>

                        <p className="text-white mt-2">Already Registered? <Link href="/login" className="text-blue-400">login</Link></p>
                    </form>
                </div>
            </div>
    )
}