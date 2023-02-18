import { AuthResponse } from "../types/Auth.type";
import { instance } from "./config.api";

export const signup = (body: { email: string; password: string }) =>
  instance.post<AuthResponse>("/signup", body);
export const login = (body: { email: string; password: string }) =>
  instance.post<AuthResponse>("/login", body);
