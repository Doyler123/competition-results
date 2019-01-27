import React from "react"
import { Helmet } from "react-helmet";
import '../assets/style.css'

export default ({ children }) => (
    <div className="layout">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Results</title>
            <link rel="stylesheet" href="../assets/style.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
            crossorigin="anonymous"></link>
        </Helmet>
        {children}
    </div>
)

