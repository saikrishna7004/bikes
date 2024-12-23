import connectMongo from "@/utils/connectMongo";
import User from "@/models/User";
import Image from "@/models/Images";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { authenticateUser } from "@/utils/authenticateUser";

async function connect() {
    await connectMongo();
    console.log('Attempted a connection');
}

connect();

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = await authenticateUser(credentials);
                return user;
            }
        })
    ],
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    secret: process.env.JWT_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id;
                token.username = user.username;
                token.email = user.email;
                token.name = user.name;
                // token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user._id = token._id;
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.name = token.name;
            // session.user.role = token.role;
            return session;
        }
    }
}

const handler = NextAuth({
    ...authOptions
})

export { handler as GET, handler as POST }

export { authOptions }
