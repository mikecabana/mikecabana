import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"
import Liink from "./liink.js"

// const Nav = props => {
//   return (
//     <NavLayout>
//       <LeftNavItems>
//         <Link to={"/"}>
//           <img src="/logo.svg" style={{ width: "75px" }} />
//         </Link>
//       </LeftNavItems>

//       <RightNavItems>
// <Link to={"/projects"}>Projects</Link>
// <Link to={"/blog"}>Blog</Link>
// <ThemeToggle />
//       </RightNavItems>
//     </NavLayout>
//   )
// }

// const NavLayout = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `

// const RightNavItems = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
// `

// const LeftNavItems = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
// `

const Nav = () => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
    style={{
      paddingTop: "40px",
    }}
  >
    <div className="container">
      <div className="navbar-brand">
        <Liink
          className="navbar-item"
          to={"/"}
        >
          <img src="/logo.svg" alt="logo" />
          <span
            style={{
              marginLeft: "10px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            M I K E
          </span>
        </Liink>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Liink to={"/projects"}>Projects</Liink>
          </div>
          <div className="navbar-item">
            <Liink to={"/blog"}>Blog</Liink>
          </div>
          <div className="navbar-item">
            <Liink to={"/uses"}>/uses</Liink>
          </div>
          <div className="navbar-item">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
