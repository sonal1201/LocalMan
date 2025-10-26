"use server"

import { auth } from "@/lib/auth"
import db from "@/lib/db"
import { headers } from "next/headers"

export const currentUser = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session?.user?.id) {
            return null
        }
        const user = await db.user.findUnique({
            where: {
                id: session.user.id
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return user;
    } catch (error) {
        console.error("Error fetching current user", error);
        return null
    }
} 