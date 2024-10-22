import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error('Please add your MongoDB URI to .env.local')
}

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not re-initialized on every request.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect().then(() => {
      console.log('Database connected successfully');
      return client
    })
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri);
  clientPromise = client.connect().then(() => {
    console.log('Database connected successfully');
    return client
  })
}

export default clientPromise;