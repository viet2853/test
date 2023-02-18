import { User } from "./User.type";

export interface AuthResponse {
  accessToken: string;
  user: User;
}
