import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(email, password) {}
  async function register(email, password) {}
  async function logout() {}

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
