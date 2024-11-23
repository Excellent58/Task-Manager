import { NextResponse } from "next/server";
import clientPromise from "../lib/db";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt'

// connect to database
const user = {
    _id: new ObjectId(),
    name: "Excellent Musau",
    email: "wmusau12@gmail.com",
    password: ""
}

async function seedDB() {
    const client = await clientPromise
    const db = client.db();

    // const hashedPassword = await bcrypt.hash("12345678", 10)

    const user = {
        _id: new ObjectId(),
        name: "Excellent Musau",
        email: "wmusau12@gmail.com",
        password: await bcrypt.hash("12345678", 10)
    }

    const usersCollection = db.collection('Users')
    await usersCollection.insertOne(user)
    
    const userId = user._id
    const tasks = [
        {
            title: 'Complete the homepage UI',
            description: 'Finish the design and functionality for the homepage.',
            isCompleted: true,
            isImportant: true,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Fix login authentication bug',
            description: 'Resolve the issue with user login authentication flow.',
            isCompleted: false,
            isImportant: true,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Refactor the database models',
            description: 'Improve the structure and relationships of the database models.',
            isCompleted: true,
            isImportant: false,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Set up unit tests',
            description: 'Write unit tests for all core functionalities.',
            isCompleted: false,
            isImportant: true,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Deploy the app to production',
            description: 'Prepare and deploy the application to the production environment.',
            isCompleted: false,
            isImportant: true,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Update user profile page',
            description: 'Add new features to the user profile page and improve its design.',
            isCompleted: false,
            isImportant: false,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
        {
            title: 'Write documentation for the API',
            description: 'Document the API endpoints and how to use them effectively.',
            isCompleted: false,
            isImportant: true,
            createdAt: new Date(),
            userId: userId, // Replace with actual userId
        },
    ];

    const tasksCollection = db.collection('Tasks')
    await tasksCollection.insertMany(tasks);
}

const testDB = async () => {
const collection =  "collectionp"
}

export async function GET() {
    try {
        await seedDB()
        return NextResponse.json({message: "Database seeded successfully"})
    } catch (error) {
        return NextResponse.json({error: "failed to seed database"})
    }
}