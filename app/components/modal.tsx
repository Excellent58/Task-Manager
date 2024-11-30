import { X } from "lucide-react";
import { useEffect } from "react"; 

interface ModalProps {
    open: boolean;
    closeFn?:() => void;
    content?: React.ReactNode;
    title?: string;
    actions?: React.ReactNode; //to pass buttons or other actions
}


const Modal: React.FC<ModalProps> = (props) => {
    const {open, closeFn, title, actions, content} = props;

    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         if (e.key === 'Escape' && open) {
    //             if (cancelFn) {
    //                 cancelFn();
    //             }
    //         }
    //     };

    //     document.addEventListener('keydown', handleKeyDown);
    //     return () => document.removeEventListener('keydown', handleKeyDown);
    // }, [open, cancelFn]);

    if (!open) return null;

    return (
        <div className="fixed overflow-y-auto overflow-x-hidden inset-0 z-50  flex items-center justify-center bg-slate-800 bg-opacity-50 max-h-full">
           <div className="mx-3 md:mx-0 w-full max-w-md max-h-full rounded-lg bg-gray-100 text-black">
                {title && (
                    <div className="flex justify-between items-center p-4 md:p-5">
                        <h1 className="text-lg font-semibold">{title}</h1>
                        {closeFn && (
                            <button 
                                type="button" 
                                className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={closeFn}
                            >
                                <X/>
                                <span className="sr-only">Close modal</span>
                            </button>
                        )}
                    </div>
                )}

                <div className="p-4 md:p-5">
                    {content}
                </div>

                {actions && 
                    <div className="footer p-4 md:p-5">
                        {actions && actions}
                    </div>
                }
           </div>
        </div>
    )
}


export {Modal};