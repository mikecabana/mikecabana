import React from "react"
import "./switch.scss"

const Switch = ({ isOn, handleToggle }) => {

  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch`}
        type="checkbox"
      />
      <label
        style={{
          background: isOn && "var(--bg-color-op)",
        }}
        className="react-switch-label"
        htmlFor={`react-switch`}
      >
        <span
          style={{
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.3)",
          }}
          className={`react-switch-button`}
        />
      </label>
    </>
  )
}

export default Switch
