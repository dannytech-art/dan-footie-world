export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams extends SignInParams {
  name: string;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}