"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Ensures themes are applied using the "class" attribute
      defaultTheme="system" // Default to system preference (light/dark)
      enableSystem // Enable system theme detection
    >
      {children}
    </NextThemesProvider>
  )
}
