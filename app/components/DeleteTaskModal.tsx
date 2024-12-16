"use client"

import { useState } from "react";
import { DeleteTask } from "./buttons";
import { Modal } from "./modal";
import useDisableBodyScroll from "../hooks";
import Button from "./Button";
import { deleteTask } from "../lib/actions";

type DeleteModalProps = {
    id: string;
}

function DeleteTaskModal({ id }: DeleteModalProps) {
    const [modalOpen, setModalOpen] = useState(false)
    useDisableBodyScroll(modalOpen)
    const deleteTaskWithId = deleteTask.bind(null, id)

    return (
        <div>
            <DeleteTask
                onClick={()=> setModalOpen(true)}
            />

            <Modal
                open={modalOpen}
                title={"Delete this task?"}
                content={
                    <p>Are you sure you want to delete the task? This action cannot be reversed.</p>
                }
                actions={
                    <div className="flex items-center justify-center space-x-5">
                        <form
                            className="w-full"
                            action={deleteTaskWithId}
                            onSubmit={() => setModalOpen(false)}
                        >
                            <Button
                                label="delete"
                                backgroundColor="bg-red-400"
                            />
                        </form>

                        <div className="w-full">
                            <Button
                                label="cancel"
                                onClick={()=> setModalOpen(false)}
                            />
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default DeleteTaskModal;