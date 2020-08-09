import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return <Helmet title={data.site.siteMetadata.title} />
}
