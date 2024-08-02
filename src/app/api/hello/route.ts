import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
type ResponseData = {
  message: string
}

export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log('Hello from Next.js!')
  
  return NextResponse.json({ name:'John Doe' }, {status: 200})

  
}