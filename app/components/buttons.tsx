import Link from "next/link";
import { PlusIcon, Trash2Icon, PencilIcon } from "lucide-react";
import { } from "lucide-react";


type CreateButtonProps = {
  onClick: () => void;
};

type DeleteButtonProps = {
  onClick: () => void;
}

type UpdateButtonProps = {
  id: string;
  onClick: () => void;
}

export function CreateTask({onClick}: CreateButtonProps) {
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

export function UpdateTask({ id, onClick }: UpdateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-slate-500"
    >
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-5" />
    </button>
  );
}

export function DeleteTask({ onClick }: DeleteButtonProps) {

  return (
      <button 
        type="button" 
        className="text-slate-500 flex items-center"
        onClick={onClick}
      >
        <span className="sr-only">Delete</span>
        <Trash2Icon className="w-5" />
      </button>
  );
}