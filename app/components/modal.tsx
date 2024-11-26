

interface ModalProps {
    children?: React.ReactNode;
    isOpen: boolean;
}

interface ModalBodyProps {
    children: React.ReactNode
}

function Modal({children, isOpen}: ModalProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}

function ModalBody({children}: ModalBodyProps) {
    return (
        <form className="w-[21.4rem] md:w-[30rem] p-8">
            {children}
        </form>
    )
}

export {Modal, ModalBody};