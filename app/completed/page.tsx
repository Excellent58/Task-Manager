import TaskCard from "../components/task-card";
import { formatDate } from "@/utils/date";
import { getDoneTasks } from "../lib/data";

export default async function Page() {
  const tasks = await getDoneTasks()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <div className="border-2 border-dashed rounded-lg h-full px-2 py-2 mt-5 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pb-2">
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
