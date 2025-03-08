
export interface User {
    id: string;
    email: string;
  }
  
  export interface Post {
    _id: string;
    title: string;
    content: string;
    author: User | string;
    createdAt: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }
  
  export interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
  }