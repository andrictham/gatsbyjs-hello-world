import React from "react"
import Link from "gatsby-link"

export default () =>
  <div style={{color: `tomato`}}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="Lorem Pixel"/>
    <br />
    <Link to="/page-2">Page 2 &rarr;</Link>
    <br />
    <Link to="/counter">Counter</Link>
  </div>
