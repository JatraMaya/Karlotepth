const path = require("path")
const { paginate, createPagePerItem } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const lists = await graphql(`
        {
            allMarkdownRemark(sort: { fields: frontmatter___postid, order: ASC }) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            subtitle
                            date
                            slug
                        }
                    }
                }
            }
        }
    `)

    paginate({
        createPage,
        items: lists.data.allMarkdownRemark.edges,
        itemsPerPage: 2,
        component: path.resolve("./src/templates/chapter-list.js"),
        pathPrefix: "/chapter"
    })

    createPagePerItem({
        createPage,
        items: lists.data.allMarkdownRemark.edges,
        component: path.resolve("./src/templates/page.js"),
        itemToPath: "node.frontmatter.slug",
        itemToId: "node.id"
    })
}
