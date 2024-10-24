import Image from "next/image";
import SearchTask from "./components/search";
import { CreateTask } from "./components/buttons";
import TaskCard from "./components/task-card";
import { fetchTasks } from "./lib/data";
import { formatDate } from "@/utils/date";

export default async function Home() {
  const tasks = await fetchTasks();
  console.log(tasks)

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="mt-4 md:mt-0 flex items-center justify-between gap-2">
        <SearchTask/>
        <CreateTask/>
      </div>

      <div className="border-2 border-dashed rounded-lg h-full px-2 py-2 mt-5 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pb-2">
          {tasks.map((task) => (
            <TaskCard
              key={task._id.toString()}
              id={task._id}
              title={task.title}
              description={task.description}
              date={formatDate(task.createdAt)}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
