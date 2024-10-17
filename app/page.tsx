import Image from "next/image";
import SearchTask from "./components/search";
import { CreateTask } from "./components/buttons";
import TaskCard from "./components/task-card";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="mt-4 md:mt-0 flex items-center justify-between gap-2">
        <SearchTask/>
        <CreateTask/>
      </div>

      <div className="border-2 border-dashed rounded-lg h-full px-2 py-2 mt-5 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pb-2">
          <TaskCard
            id="task1"
            title="code a chat app"
            description="Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts."
            date="16-10-2024"
            isCompleted={true}
          />

          <TaskCard
            id="task1"
            title="code a chat app"
            description="Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts. Developed a mobile application which delivered bedtime stories to children using augmented reality."
            date="16-10-2024"
            isCompleted={true}
          />

          <TaskCard
            id="task1"
            title="code a chat app"
            description="Developed an open-source logging"
            date="16-10-2024"
            isCompleted={true}
          />
          <TaskCard
            id="task1"
            title="code a chat app"
            description="Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts."
            date="16-10-2024"
            isCompleted={false}
          />
        </div>
      </div>
    </div>
  );
}
