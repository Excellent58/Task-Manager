'use server'

import clientPromise from "./db";
import bcrypt from 'bcrypt'
import { z } from "zod";
import { redirect } from "next/navigation";
import { signIn } from '@/auth'
import { AuthError } from "next-auth";
import { signOut } from '@/auth';

const UserSchema = z.object({
    name: z.string({
        invalid_type_error: 'please enter your name',
    }).min(2, "name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "password must be at least 6 characters"),
})

const TaskSchema = z.object({
    id: z.string(),
    userId: z.string(),
    title: z.string({
        invalid_type_error: 'please enter a title',
    }),
    description: z.string({
        invalid_type_error: 'please enter a description',
    }),
    isImportant: z.boolean(),
    isCompleted: z.boolean(),
    createdAt: z.string(),
})

const CreateTask = TaskSchema.omit({id: true, userId: true, createdAt: true})

export async function getCurrentUser() {

}

export type userState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    }

    message?: string | null
};

export type taskState = {
    errors?: {
        title?: string[];
        description?: string[];
        // isCompleted?: string[];
        // isImportant?: string[];
    }

    message?: string | null
}

export async function createTask(id: string | undefined, prevState: taskState, formData: FormData) {
    const client = await clientPromise
    const db = client.db()

    const validatedFields = CreateTask.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        isCompleted: formData.has('isCompleted') ? true : false,
        isImportant: formData.has('isImportant') ? true : false,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Failed to create task. ",
        }
    }

    const { title, description, isCompleted, isImportant } = validatedFields.data
    const createdAt = new Date()
    const userId = 

    console.log(validatedFields.data)
}

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

export async function authenticate( prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
    }
}

export async function LogOut() {
    await signOut()
}