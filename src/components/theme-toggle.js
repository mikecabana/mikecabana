import React, { useState } from "react"
import Switch from "./switch"

const ThemeToggle = () => {
  const localValue = localStorage.getItem("data-theme") === "true"

  const setTheme = value => {
    localStorage.setItem("data-theme", value)
    document.documentElement.setAttribute(
      "data-theme",
      value ? "dark" : "light"
    )
  }

  const [value, setValue] = useState(() => {
    setTheme(localValue)
    return localValue
  })

  const toggle = () => {
    setValue(!value)
    setTheme(value)
  }

  return <Switch isOn={value} handleToggle={toggle} />
}

export default ThemeToggle
