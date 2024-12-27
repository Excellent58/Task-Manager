'use client'

import { useState } from "react";
import { Modal } from "./modal";
import useDisableBodyScroll from "../hooks";
import { UpdateTask } from "./buttons";
import Button from "./Button";
import { updateTaskAction } from "../lib/actions";
import { useActionState } from "react";
import { taskState } from "../lib/actions";

type EditModalProps = {
    id: string;
    task: Task;
}

type Task = {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    isImportant: boolean;
    isCompleted: boolean;
    userId: string;
}

function EditTaskModal({id, task}:EditModalProps ) {
    const [modalOpen, setModalOpen] = useState(false)
    useDisableBodyScroll(modalOpen)
    
    const initialState: taskState = { message: null, errors: {} };
    const updateTaskWithId = updateTaskAction.bind(null, id)
    const [state, formAction] = useActionState(updateTaskWithId, initialState)

    return (
        <div className="flex">
            <UpdateTask
                id={id}
                onClick={()=> setModalOpen(true)}
            />

            <Modal
                open={modalOpen}
                title="Edit Task"
                closeFn={()=> setModalOpen(false)}
                content= {
                    <form 
                        className=""
                        action={formAction}
                        onSubmit={()=> setModalOpen(false)}
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
                                name="title" 
                                defaultValue={task.title}
                                placeholder="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            />
                            {state.errors?.title &&
                                state.errors.title.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea 
                                id="description"
                                name="description"
                                placeholder="Write task description here"
                                defaultValue={task.description} 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            >
                            </textarea>
                            {state.errors?.description &&
                                state.errors.description.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>

                        <div className="">
                            <div className="flex items-center h-5 pt-3">
                                <input id="isImportant" name="isImportant" type="checkbox" defaultChecked={task.isImportant} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-30"/>
                                <label htmlFor="isImportant" className="ms-2 text-sm font-medium text-gray-900">Important</label>
                            </div>

                            <div className="flex items-center h-5 pt-3">
                                <input id="isCompleted" name="isCompleted" type="checkbox" defaultChecked={task.isCompleted} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
                                <label htmlFor="isCompleted" className="ms-2 text-sm font-medium text-gray-900">Completed</label>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button
                                label="Save changes"
                            />
                        </div>
                    </form>
                }
            />
        </div>
    )
}

export default EditTaskModal;