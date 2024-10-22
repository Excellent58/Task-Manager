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