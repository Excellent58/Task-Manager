'use server'

import clientPromise from "./db";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt'
import { z } from "zod";
import { redirect } from "next/navigation";

const UserSchema = z.object({
    name: z.string({
        invalid_type_error: 'please enter your name',
    }).min(2, "name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "password must be at least 6 characters"),
})

const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string({
        invalid_type_error: "please enter your password"
    })
})

export type userState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    }

    message?: string | null
};

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

export async function createAccount(prevState: userState, formData: FormData) {
    const client = await clientPromise
    const db = client.db();

    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'missing fields. Failed to create invoice.',
        }
    }

    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = {
        name: name,
        email: email,
        password: hashedPassword,
    }

    const userCollection = db.collection('Users')

    try {
        await userCollection.insertOne(user)
    } catch (error) {
        return {
            message: "Database Error: Failed to create user"
        };
    }

    redirect('/login')
}

export async function authenticate() {}