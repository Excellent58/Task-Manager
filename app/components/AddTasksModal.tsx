'use client'
import { Modal } from "./modal"
import { useState } from "react"
import useDisableBodyScroll from "../hooks";

export default function AddTaskModal() {
    const [modalOpen, setModalOpen] = useState(false);
    useDisableBodyScroll(modalOpen)

    return (
        <div className="">
            <h1 className="text-white">Hey, click on the button to open the modal.</h1>
            <button className="text-white bg-blue-600 px-4 py-1 rounded-lg" onClick={() => setModalOpen(true)}>
                Open
            </button>

            <Modal 
                open={modalOpen}
                title={"Add Task"}
                secondaryFn={() => setModalOpen(false)}
                cancelFn={()=> setModalOpen(false)}
                content={
                   <>
                     <h2>This is a modal</h2>
                     <p>You can close it by pressing Escape key, pressing close, or clicking outside the modal.</p>
                  </>

               }
           />
        </div>
    )
}