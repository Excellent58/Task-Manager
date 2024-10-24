import clientPromise from "./db";

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