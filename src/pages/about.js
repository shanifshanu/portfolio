import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const About = ({ data, location }) => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="body-global-wrapper">
        <br></br>
        <p className="titleimage">
          Welcome to my portfolio! I’m Muhammed Shanif, an enthusiastic actor
          with a passion for telling compelling stories through the art of
          performance. Trained in various acting techniques, I thrive on
          bringing characters to life, whether on stage or in front of the
          camera. My journey in the performing arts is fueled by a love for
          creativity and a commitment to honing my craft. Here, you’ll find a
          collection of my work, including stage performances and film projects,
          showcasing my versatility and dedication to the art of acting. Thank
          you for visiting, and I look forward to sharing my artistic journey
          with you!
          <br></br>
          <br></br>
          <u>Education:</u>
          <br></br>
          BTech Electrical and Electronics Engineering (EEE)
          <br></br>
          THEJUS ENGINEERING COLLEGE
          <br></br>
          <br></br>
          <u>Location:</u>
          <br></br>
          Edakkazhiyoor, Chavakkad, Thrissur, Kerala - 680515
          <br></br>
          <br></br>
          <u>Personal Details:</u>
          <br></br>
          Age: 21
          <br></br>
          Height: 171cm
          <br></br>
          Weight: 67kg
          <br></br>
          <br></br>
          You can reach out to me via email or connect with me on Instagram.
          <br></br>
          <p>
            Feel free to{" "}
            <a
              href="mailto:Shanifsharafudheen007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              send me an email
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.instagram.com/sh_anif313"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Instagram
            </a>
            .
          </p>
        </p>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
