import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
    return (
        <Layout title="404" subtitle="page not found">
            <p className="has-text-centered">The page your looking cannot be found, please click <Link to="/">here</Link> to return to the front page.</p>
        </Layout>
    )
}
