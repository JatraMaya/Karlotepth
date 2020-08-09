import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => {
    const siteData = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className="footer">
            <div className="has-text-centered">
                &copy;{new Date().getFullYear()}
                {" " + siteData.site.siteMetadata.author}
                <div className="container social-container">
                    <a href="https://twitter.com/AhmadF_Iksan" target="_blank" rel="noreferrer" className="social-icon">
                        <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
                    </a>
                    <a href="https://github.com/JatraMaya" target="_blank" rel="noreferrer" className="social-icon">
                        <FontAwesomeIcon size="2x" icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-f-iksan-72a8bb122/" target="_blank" rel="noreferrer" className="social-icon">
                        <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
