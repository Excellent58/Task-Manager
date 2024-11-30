"use client"

import { useState } from "react";
import { DeleteTask } from "./buttons";
import { Modal } from "./modal";
import useDisableBodyScroll from "../hooks";
import Button from "./Button";

type DeleteModalProps = {
    id: string;
}

function DeleteTaskModal({ id }: DeleteModalProps) {
    const [modalOpen, setModalOpen] = useState(false)
    useDisableBodyScroll(modalOpen)

    return (
        <div>
            <DeleteTask
                id={id}
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
                        <Button
                            label="delete"
                            backgroundColor="bg-red-400"
                        />

                        <Button
                            label="cancel"
                            onClick={()=> setModalOpen(false)}
                        />
                    </div>
                }
            />
        </div>
    )
}

export default DeleteTaskModal;