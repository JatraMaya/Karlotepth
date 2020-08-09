import React, { useState } from "react"
import { Link } from "gatsby"

export default () => {
    const [active, setActive] = useState(false)

    return (
        <nav className="navbar" role="navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item main-title">
                        <p className="is-family-secondary is-capitalized has-text-weight-bold">karlotepth</p>
                    </Link>
                    <div role="button" tabIndex={0} onClick={() => setActive(!active)} onKeyDown={() => setActive(!active)} className={active ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item is-capitalized" activeClassName="menu-active">
                            home
                        </Link>
                        <Link to="/chapter" className="navbar-item is-capitalized" activeClassName="menu-active">
                            chapters
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
