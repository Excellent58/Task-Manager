import type { NextAuthConfig } from "next-auth";
import { signIn } from "next-auth/webauthn";


export const authConfig = {
    pages: {
        signIn: '/login',
    },

    providers: []
} satisfies NextAuthConfig;