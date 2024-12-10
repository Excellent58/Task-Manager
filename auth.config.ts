import type { NextAuthConfig } from "next-auth";


export const authConfig = {
    pages: {
        signIn: '/login',
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !! auth?.user;
            const { pathname } = nextUrl;

            if (pathname.startsWith('/signup')) {
                return true
            }

            const isProtectedRoute = ['/', '/completed', '/important', 'incomplete'].some(route => pathname.startsWith(route));

            if(isProtectedRoute) {
                if (isLoggedIn) return true;
                return false; // redirect unauthenticated users to login page
            } else if ( isLoggedIn ) {
                return Response.redirect(new URL('/', nextUrl))
            }
            
            return true;
        },
     
    },

    providers: []
} satisfies NextAuthConfig;