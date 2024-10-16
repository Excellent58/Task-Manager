import { UpdateTask, DeleteTask } from "./buttons";

type Task = {
    id: string;
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
}

function TaskItem({id, title, description, date, isCompleted}:Task) {
    return (
        <div className="flex flex-col justify-between h-[16rem] bg-slate-800 text-white w-full p-3 max-w-[300px] rounded-xl ">
            <div>
                <h1 className="text-lg flex justify-center">{title}</h1>
                <p className="mt-4 text-slate-200">{description}</p>
                <p className="text-slate-300">{date}</p>
            </div>

            <div className="">
                {isCompleted ? (
                    <div className="flex space-x-2 justify-between">
                        <h2>completed</h2>
                        <div className="flex items-center space-x-2 ">
                            <UpdateTask id={id}/>
                            <DeleteTask id={id}/>
                        </div>
                    </div>
                ): (
                    <div>
                        <h2>incomplete</h2>
                        <div>
                            <UpdateTask id={id}/>
                            <DeleteTask id={id}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskItem;