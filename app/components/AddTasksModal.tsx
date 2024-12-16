'use client'

import { Modal } from "./modal"
import { useState } from "react"
import useDisableBodyScroll from "../hooks";
import { CreateTask } from "./buttons";
import { createTask } from "../lib/actions";
import { taskState } from "../lib/actions";
import { useActionState } from "react";
import { useSession } from "next-auth/react";

export default function AddTaskModal() {
    const [modalOpen, setModalOpen] = useState(false);
    useDisableBodyScroll(modalOpen)

    const {data: session} = useSession()

    const userId = session?.user?.id

    const initialState: taskState = { message: null, errors: {} };
    const createTaskWithId = createTask.bind(null, userId)
    const [state, formAction] = useActionState(createTaskWithId, initialState)

    return (
        <div className="">
            <CreateTask
                onClick={() => setModalOpen(true)}
            />

            <Modal 
                open={modalOpen}
                title={"Add Task"}
                closeFn={()=> setModalOpen(false)}
                content={
                    <form 
                        action={formAction}
                    >
                        <div>
                            <label 
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Title
                            </label>
                            <input 
                                type="text" 
                                id="title"
                                name="title" 
                                placeholder="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea 
                                name="description"
                                id="description"
                                placeholder="Write task description here" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            >
                            </textarea>
                        </div>

                        <div className="">
                            <div className="flex items-center h-5 pt-3">
                                <input id="isImportant" name="isImportant" type="checkbox" value="isImportant" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-30"/>
                                <label htmlFor="isImportant" className="ms-2 text-sm font-medium text-gray-900">Important</label>
                            </div>

                            <div className="flex items-center h-5 pt-3">
                                <input id="isComplete" name="isComplete" type="checkbox" value="isComplete" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
                                <label htmlFor="isComplete" className="ms-2 text-sm font-medium text-gray-900">Completed</label>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3">
                            <button
                                type="submit"
                                className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                            >
                                Add task
                            </button>
                        </div>
                    </form>
               }
           />
        </div>
    )
}