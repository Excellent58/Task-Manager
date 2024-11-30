'use client'

import { useState } from "react";
import { Modal } from "./modal";
import useDisableBodyScroll from "../hooks";
import { UpdateTask } from "./buttons";
import Button from "./Button";

type EditModalProps = {
    id: string;
}

function EditTaskModal({id}:EditModalProps ) {
    const [modalOpen, setModalOpen] = useState(false)
    useDisableBodyScroll(modalOpen)

    return (
        <div>
            <UpdateTask
                id={id}
                onClick={()=> setModalOpen(true)}
            />

            <Modal
                open={modalOpen}
                title="Edit Task"
                closeFn={()=> setModalOpen(false)}
                content= {
                    <form className="">
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
                                placeholder="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea 
                                id="description"
                                placeholder="Write task description here" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            >
                            </textarea>
                        </div>

                        <div className="">
                            <div className="flex items-center h-5 pt-3">
                                <input id="isImportant" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-30" required />
                                <label htmlFor="isImportant" className="ms-2 text-sm font-medium text-gray-900">Important</label>
                            </div>

                            <div className="flex items-center h-5 pt-3">
                                <input id="isComplete" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                <label htmlFor="isComplete" className="ms-2 text-sm font-medium text-gray-900">Completed</label>
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