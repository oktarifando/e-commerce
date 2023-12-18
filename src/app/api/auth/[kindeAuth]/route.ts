import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

interface Props {
  params: {
    kindeAuth: string;
  };
}

type AuthEndpoints =
  | "login"
  | "logout"
  | "register"
  | "kinde_callback"
  | "create_org";

export async function GET(request: NextRequest, { params }: Props) {
  const endpoint = params.kindeAuth as AuthEndpoints;
  return handleAuth(request, endpoint);
}
