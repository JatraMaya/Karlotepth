import React from "react"

import Seo from "../components/seo"
import Hero from "../components/hero"
import Nav from "../components/navbar"

export default ({ title, subtitle }) => {
    return (
        <>
            <Seo />
            <Nav />
            <Hero>
                <h1 className="is-family-secondary is-capitalized has-text-centered title is-size-1-desktop">{title}</h1>
                <h2 className="is-capitalized has-text-centered is-size-7">{subtitle}</h2>
            </Hero>
        </>
    )
}
