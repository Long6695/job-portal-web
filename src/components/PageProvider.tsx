import React from "react"
import {createTheme, ThemeProvider} from "@mui/material"
import {useTheme} from "next-themes"
import {ReactNode, useEffect, useState} from "react"
import lightThemeOptions from "../styles/theme/lightThemeOptions"
import darkThemeOptions from "../styles/theme/darkThemeOptions"
interface PageProviderProps {
  children: ReactNode
}
const PageProvider = ({children}: PageProviderProps) => {
  const {resolvedTheme} = useTheme()
  const [currentTheme, setCurrentTheme] = useState(lightThemeOptions)
  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(darkThemeOptions)
      : setCurrentTheme(lightThemeOptions)
  }, [resolvedTheme])

  const theme = createTheme(currentTheme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default PageProvider
