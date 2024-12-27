import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from './app/lib/definitions';
import clientPromise from './app/lib/db';
import bcrypt from 'bcrypt';
import { getSession } from 'next-auth/react';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const client = await clientPromise
    const db = client.db();

    const user = await db.collection<User>('Users')
      .findOne({email: email})

    return user || undefined;
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    return undefined
  }
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);

      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email)

        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password)

        if (passwordsMatch) return user
      }

      console.log('Invalid credentials');
      return null;
    },

  })],

  callbacks: {
    async session({session, token}) {
      if (token?.sub) {
        session.user.id = token.sub
        session.user.name = token.name
      }

      return session
    },

    async jwt({token, user}) {
      if (user) {
        token.sub = user.id
        token.name = user.name;
      }

      return token
    },

  },

  session: {
    strategy: 'jwt',
  },

});