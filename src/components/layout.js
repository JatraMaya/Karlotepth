import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

export default ({ title, subtitle, children }) => {
    return (
        <>
            <Header title={title} subtitle={subtitle}/>
            <main>
                <section>
                    <div className="container content">{children}</div>
                </section>
            </main>
            <Footer />
        </>
    )
}
