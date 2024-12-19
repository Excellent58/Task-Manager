import { console } from "inspector";
import clientPromise from "./db";
import { ObjectId } from "mongodb";

export async function getTasks() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const tasks = await db.collection('Tasks')
            .find({})
            .sort({createdAt: -1})
            .toArray();
        
        return tasks;
    } catch (error) {
        console.error('database Error: ', error);
        throw new Error('Failed to fetch tasks')
    }
}

export type Task = {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    isImportant: boolean;
    isCompleted: boolean;
    userId: string
}

export async function fetchTaskByID(id: string) {
    try {
        const client = await clientPromise;
        const db = client.db();

        const task = await db.collection('Tasks')
            .findOne({_id: new ObjectId(id)})
        
        if (!task) {
            throw new Error("task not found")
        }

        const serializedTask: Task = {
            _id: task._id.toString(),
            title: task.title,
            description: task.description,
            createdAt: task.createdAt.toISOString(),
            isImportant: task.isImportant,
            isCompleted: task.isCompleted,
            userId: task.userId.toString()
        }

        return serializedTask
    } catch (error) {
        console.error("Error fetching task:", error);
        throw new Error("Cannot fetch task");
    }
}

export async function getFilteredTasks() {}

export async function getImportantTasks() {
    try{
        const client = await clientPromise;
        const db = client.db();

        const tasks = await db.collection('Tasks')
            .find({isImportant: true})
            .sort({createdAt: -1})
            .toArray();
        
        return tasks
    } catch (error) {
        console.error('Failed to fetch important tasks', error)
    }
}

export async function getDoneTasks() {
    try{
        const client = await clientPromise
        const db = client.db()

        const tasks = await db.collection("Tasks")
            .find({isCompleted: true})
            .sort({createdAt: -1})
            .toArray();
        
        return tasks
    } catch (error) {
        console.error("failed to fetch completed tasks", error)
    }
}

export async function getIncompleteTasks() {
    try{
        const client = await clientPromise
        const db = client.db()

        const tasks = await db.collection("Tasks")
            .find({isCompleted: false})
            .sort({createdAt: -1})
            .toArray();
        
        return tasks
    } catch (error) {
        console.error("failed to fetch incomplete tasks", error)
    }
}