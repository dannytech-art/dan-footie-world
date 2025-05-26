// src/app/server/users/actions.ts
"use server";

import { auth } from "src/lib/auth/config";
import type { SignInParams, SignUpParams, AuthResponse } from "./types";

export const signIn = async ({
  email,
  password
}: SignInParams): Promise<AuthResponse> => {
  try {
    const result = await auth.signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (!result?.user) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    return {
      success: true,
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name || ""
      }
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Authentication failed"
    };
  }
};

export const signUp = async ({
  name,
  email,
  password
}: SignUpParams): Promise<AuthResponse> => {
  try {
    const result = await auth.createUser({
      email,
      password,
      attributes: {
        name
      }
    });

    return {
      success: true,
      user: {
        id: result.id,
        email: result.email,
        name: result.name || ""
      }
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Registration failed"
    };
  }
};