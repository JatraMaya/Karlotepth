module.exports = {
    siteMetadata: {
        author: "ahmad f. iksan",
        title: "karlotepth | web-novel by JatraMaya"
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `image`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `chapter`,
                path: `${__dirname}/src/chapters`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            plugins: []
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [`Charmonman:400,700`, `Roboto+Slab:100,200,300,400,500,600,700`],
                display:"swap"
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet"
    ]
}
