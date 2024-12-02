'user server'

import clientPromise from "./db";
import { ObjectId } from "mongodb";


interface User {
    name: string;
    email: string;
    password: string
}

interface Task {
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