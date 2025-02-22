import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as jose from "jose"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const secret = new TextEncoder().encode("process.env.JWT_SECRET");

export const jwtSign = async () => {
  try {
    const alg = "HS256";
    const token = (
      await new jose.SignJWT().setProtectedHeader({ alg }).sign(secret)
    ).toString();
    return token;
  } catch (e:any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const isAuth = async (token: string) => {
  try {
    const isAuth = await jose.jwtVerify(token, secret);
    return isAuth;
  } catch (e:any) {
    console.log(e);
    throw new Error(e.message);
  }
};
