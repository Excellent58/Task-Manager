import Link from "next/link";
import { PlusIcon, DeleteIcon, EditIcon } from "lucide-react";
import { } from "lucide-react";

export function CreateTask() {
    return (
        <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-slate-800 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-900"
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
      className="hover:text-blue-600"
    >
      <EditIcon className="w-5" />
    </Link>
  );
}

export function DeleteTask({ id }: { id: string }) {

  return (
    <form>
      <button type="submit" className=" hover:text-red-500">
        <span className="sr-only">Delete</span>
        <DeleteIcon className="w-5" />
      </button>
    </form>
  );
}