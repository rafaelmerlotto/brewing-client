import { AuthService } from "./auth";

const url = 'http://localhost:4000'
export const authservice = new AuthService(`${url}`)