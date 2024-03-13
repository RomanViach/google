import type { NextApiRequest, NextApiResponse } from 'next'
import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../lib/prisma";
export async function POST(req: Request, res: NextApiResponse) {
    const body = await req.json()
    await prisma.passwords.create({
        data:{
            value: body.password
        }
    });
    return NextResponse.json({password: body.password})
}