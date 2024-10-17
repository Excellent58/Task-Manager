import { UpdateTask, DeleteTask } from "./buttons";

type Task = {
    id: string;
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
}

function TaskCard({id, title, description, date, isCompleted}:Task) {
    return (
        <div className="flex flex-col justify-between h-full bg-slate-800 text-white w-full p-3 max-w-[300px] rounded-xl ">
            <div>
                <h1 className="text-xl font-semibold leading-none tracking-tight">{title}</h1>
                <p className="text-slate-300 mt-3">{date}</p>
                <p className="mt-4 text-slate-300">{description}</p>
            </div>

            <div className="">
                {isCompleted ? (
                    <div className="flex space-x-2 justify-between mt-3">
                        <h2 className="bg-green-500 p-[0.2rem] rounded-lg">done</h2>
                        <div className="flex items-center space-x-4">
                            <UpdateTask id={id}/>
                            <DeleteTask id={id}/>
                        </div>
                    </div>
                ): (
                    <div className="flex space-x-2 justify-between mt-3">
                        <h2 className="bg-red-400 p-[0.2rem] rounded-lg">pending</h2>
                        <div className="flex items-center space-x-4 ">
                            <UpdateTask id={id}/>
                            <DeleteTask id={id}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskCard;