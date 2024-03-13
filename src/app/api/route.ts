import type { NextApiRequest, NextApiResponse } from 'next'
import {NextRequest, NextResponse} from "next/server";
export async function POST(req: Request, res: NextApiResponse) {
    const body = await req.json()
    return NextResponse.json({password: body.password})
}