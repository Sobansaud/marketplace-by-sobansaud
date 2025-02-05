// "use client";

// import { createContext, useState, ReactNode, useContext } from "react";

// interface User {
//   email: string;
//   password: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => boolean;
//   signup: (email: string, password: string) => void;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (email: string, password: string): boolean => {
//     setUser({ email, password });
//     return true;
//   };

//   const signup = (email: string, password: string) => {
//     console.log("User signed up:", email);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context }


