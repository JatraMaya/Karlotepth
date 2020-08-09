import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default ({ children }) => {
    const img = useStaticQuery(graphql`
        query {
            img: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(quality: 40, maxWidth: 960) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <BackgroundImage fluid={img.img.childImageSharp.fluid} className="hero">
            <div className="hero-body hero-overlay">{children}</div>
        </BackgroundImage>
    )
}
