import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvier";

export const useAuth = () => useContext(AuthContext);