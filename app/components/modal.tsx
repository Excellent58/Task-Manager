import { useEffect } from "react"; 

interface ModalProps {
    open: boolean;
    cancelFn?: () => void;
    primaryFn?: () => void;
    secondaryFn?:() => void;
    content?: React.ReactNode;
    title?: string;
    className?: string;
}


const Modal: React.FC<ModalProps> = (props) => {
    const {open, cancelFn, primaryFn, secondaryFn, title, content} = props;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open) {
                if (cancelFn) {
                    cancelFn();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, cancelFn]);

    if (!open) return null;

    return (
        <div className="fixed overflow-y-auto overflow-x-hidden inset-0 z-50  flex items-center justify-center bg-slate-800 bg-opacity-50">
           <div className="w-full max-w-[400px] rounded-lg h-[300px] bg-gray-100 text-black p-6">
                {title && (
                    <div>
                        <h1 className="bold text-lg">{title}</h1>

                    </div>
                )}

                <div className="mt-6">
                    {content}
                </div>

                <div className="footer">
                    {secondaryFn && (
                        <button onClick={secondaryFn} id="cancelBtn">
                            Cancel
                        </button>
                    )}
                    {primaryFn && (
                        <button onClick={primaryFn}>Continue</button>
                    )}
                </div>
           </div>
        </div>
    )
}


export {Modal};