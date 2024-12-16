import SearchTask from "../../components/search";
import TaskCard from "../../components/task-card";
import { getTasks } from "../../lib/data";
import { formatDate } from "@/utils/date";
import AddTaskModal from "../../components/AddTasksModal";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="mt-4 md:mt-0 flex items-center justify-between gap-2">
        <SearchTask/>
        <AddTaskModal/>
      </div>

      <div className="rounded-lg h-full py-2 mt-5 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {tasks.map((task) => (
            <TaskCard
              key={task._id.toString()}
              id={task._id.toString()}
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
