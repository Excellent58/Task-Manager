import Link from "next/link";
import { PlusIcon, Trash2Icon, PencilIcon } from "lucide-react";
import { } from "lucide-react";


type CreateTaskProps = {
  onClick: () => void;
};

export function CreateTask({onClick}: CreateTaskProps) {
    return (
        <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-slate-800 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-900"
            onClick={onClick}
        >
            <span className="hidden md:block">Create Task</span>
            <PlusIcon className="h-5 md:ml-4"/>
        </Link>
    )
}

export function UpdateTask({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="text-slate-500"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTask({ id }: { id: string }) {

  return (
    <form>
      <button type="submit" className="text-slate-500 flex items-center">
        <span className="sr-only">Delete</span>
        <Trash2Icon className="w-5" />
      </button>
    </form>
  );
}