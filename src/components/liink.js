import React from 'react';
import { Link } from "gatsby"

const Liink = props => <Link {...props} style={{ textDecoration: "none", color: "var(--color)" }}>{props.children}</Link>

export default Liink
