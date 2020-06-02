import React, { useState } from "react"
import Switch from "./switch"

const ThemeToggle = () => {
  const localValue = localStorage.getItem("data-theme") === "true"

  const setThemeInStorage = value => {
    localStorage.setItem("data-theme", value)
  }

  const setThemeOnDocument = value => {
    document.documentElement.setAttribute(
      "data-theme",
      value ? "dark" : "light"
    )
  }

  const [value, setValue] = useState(() => {
    setThemeOnDocument(localValue)
    return localValue
  })

  const toggle = () => {
    setValue(!value)
    setThemeOnDocument(!value)
    setThemeInStorage(!value)
  }

  return <Switch isOn={value} handleToggle={toggle} />
}

export default ThemeToggle
