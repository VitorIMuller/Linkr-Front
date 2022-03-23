import { useContext } from "react";
import AuthContext from "../Contexts/authContext";

export default function useAuth() {
  return useContext(AuthContext)
}