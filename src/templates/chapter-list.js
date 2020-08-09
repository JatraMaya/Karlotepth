import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(sort: { fields: [frontmatter___postid], order: ASC }, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`

export default props => {
    const { pageContext } = props
    const { previousPagePath, nextPagePath } = pageContext
    return (
        <Layout title="Chapters" subtitle="daftar isi">
            <ul>
                {props.data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li key={edge.node.frontmatter.title}>
                            <Link to={`/${edge.node.frontmatter.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <div className="pagination-list">
                    {previousPagePath ? <Link to={previousPagePath} className="pagination-link">prev</Link> : <Link to='#' className="pagination-link" disabled>prev</Link>}
                    {nextPagePath ? <Link to={nextPagePath} className="pagination-link">next</Link> : <Link to='#' className="pagination-link" disabled>next</Link>}
                </div>
            </nav>
        </Layout>
    )
}
