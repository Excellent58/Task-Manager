'user server'

import { ObjectId } from "mongodb";


interface User {
    _id: ObjectId;
    name: string;
    email: string;
    password: string
}

interface Task {
    _id: ObjectId;
    title: string;
    description: string;
    isCompleted: Date
    isImportant: boolean
    createdAt: Date
    userId: ObjectId
}

export async function createTask() {}

export async function updateTask() {}

export async function deleteTask() {}

export async function authenticate() {}