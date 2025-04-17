'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

import { ThemeProvider as CustomThemeProvider } from '@/components/theme-provider'

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default MyApp
