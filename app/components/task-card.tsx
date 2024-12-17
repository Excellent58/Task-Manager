import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";
import { fetchTaskByID } from "../lib/data";
import { ObjectId } from "mongodb";
import { Task } from "../lib/data";

type TaskProps = {
    id: string;
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
}

async function TaskCard({id, title, description, date, isCompleted}: TaskProps) {
    const task = await fetchTaskByID(id)
    
    return (
        <div className="flex flex-col justify-between h-full bg-slate-800 text-white w-full p-3 max-w-[300px] rounded-xl ">
            <div>
                <h1 className="text-xl font-semibold leading-none tracking-tight">{title}</h1>
                <p className="text-slate-300 mt-3">{date}</p>
                <p className="mt-4 text-slate-300">{description}</p>
            </div>

            <div className="">
                <div className="flex space-x-2 justify-between mt-3">
                    {isCompleted ? <h2 className="p-[0.2rem] rounded-lg text-green-500">Done</h2> 
                    : <h2 className="p-[0.2rem] rounded-lg text-red-400">pending</h2>
                    }
                    
                    <div className="flex items-center space-x-4">
                        <EditTaskModal id={id} task={task}/>
                        <DeleteTaskModal id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;