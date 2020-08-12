import React from "react"
import Switch from "./switch"

class ThemeToggle extends React.Component {
  storage
  value;

  constructor(props) {
    super(props)
    this.state = {
      value: false,
    }
  }

  componentDidMount() {
    this.storage = window.localStorage
    this.value = this.toBoolean(this.storage.getItem("data-theme"))
    this.setState({ value: this.value })
    this.setThemeOnDocument(this.value)
  }

  toBoolean(str) {
    return str === "true" ? true : false
  }

  setThemeInStorage(value) {
    if (this.storage) {
      this.storage.setItem("data-theme", value)
    }
    this.value = value;
  }

  setThemeOnDocument(value) {
    document.documentElement.setAttribute(
      "data-theme",
      value ? "dark" : "light"
    )
    this.value = value;
  }

  toggle() {
    this.setState({ value: !this.value })
    this.setThemeOnDocument(!this.state.value)
    this.setThemeInStorage(!this.state.value)
  }

  render() {
    return (<Switch isOn={this.value} handleToggle={() => this.toggle()} />)
  }
}

export default ThemeToggle
