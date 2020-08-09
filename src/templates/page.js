import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export const pageQuery = graphql`
    query($pageId: String!) {
        markdownRemark(id: { eq: $pageId }) {
            frontmatter {
                title
                subtitle
                slug
            }
            html
        }
    }
`

export default props => {
    const { pageContext, data } = props
    const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext
    const story = data.markdownRemark

    return (
        <Layout title={story.frontmatter.title} subtitle={story.frontmatter.subtitle}>
            <div className="has-text-justified" dangerouslySetInnerHTML={{ __html: story.html }}></div>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <div className="pagination-list">
                    {previousPagePath ? (
                        <Link to={`/${previousItem.node.frontmatter.slug}`} className="pagination-link">
                            {previousItem.node.frontmatter.title}
                        </Link>
                    ) : <Link to="#" disabled className="pagination-link">Previous</Link>}
                    {nextPagePath ? (
                        <Link to={`/${nextItem.node.frontmatter.slug}`} className="pagination-link">
                            {nextItem.node.frontmatter.title}
                        </Link>
                    ) : <Link to="#"  disabled className="pagination-link">Next</Link>}
                </div>
            </nav>
        </Layout>
    )
}
