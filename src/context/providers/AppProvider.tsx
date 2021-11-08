import React from 'react'
import { ToogleThemeButton } from '../../components/ToogleThemeButton'
import { ThemeProvider } from './ThemeProvider'

export const AppProvider = () => {
  return (
    <div>
      <ThemeProvider>
        <ToogleThemeButton />

      </ThemeProvider>
    </div>
  )
}
