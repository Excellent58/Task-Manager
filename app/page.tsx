import Image from "next/image";
import SearchTask from "./components/search";
import { CreateTask } from "./components/buttons";
import TaskItem from "./components/task-item";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="mt-4 md:mt-0 flex items-center justify-between gap-2">
        <SearchTask/>
        <CreateTask/>
      </div>

      <div className="border border-dotted h-screen px-2 py-2 mt-5 flex flex-col">
        <div className="grid grid-cols-2 gap-2">
          <TaskItem
            id="task1"
            title="code a chat app"
            description="built with Nextjs"
            date="16-10-2024"
            isCompleted={true}
          />

          <TaskItem
            id="task1"
            title="code a chat app"
            description="built with Nextjs"
            date="16-10-2024"
            isCompleted={true}
          />
        </div>
      </div>
    </div>
  );
}
