import clientPromise from "./db";

export async function fetchTasks() {
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

export async function fetchFilteredTasks() {}

export async function fetchImportantTasks() {}

export async function fetchDoneTasks() {}

export async function fetchIncompleteTasks() {}