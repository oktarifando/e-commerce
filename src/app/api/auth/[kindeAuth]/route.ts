import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(
  request: Request | NextRequest,
  { params }: { params: { kindeAuth: string } }
) {
  const endpoint = params.kindeAuth;
  return handleAuth(request, endpoint);
}
