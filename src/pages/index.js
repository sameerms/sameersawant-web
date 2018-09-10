import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

//import '../styles/blog-listing.css'; 

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{`Fra -${post.frontmatter.date1} Til-${post.frontmatter.date2} `}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 600)
          id
          frontmatter {
            title
            date1(formatString: "MMMM DD, YYYY")
            date2(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;