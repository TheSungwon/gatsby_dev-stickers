import React from "react";

import { Link, PageProps, graphql } from "gatsby";
import Layout from "../../componenets/Layout";
import Seo from "../../componenets/Seo";

function Blog({
  data: {
    allMdx: { nodes },
  },
}: PageProps<Queries.MyQueryQuery>) {
  console.log(nodes);
  return (
    <Layout title="Blog">
      <section>
        {nodes.map((file, index) => (
          <Link to={`/blog/${file.frontmatter?.slug}`} key={index}>
            <article>
              <h3>{file.frontmatter?.title}</h3>
              <h3>{file.frontmatter?.author}</h3>
              <h3>{file.frontmatter?.date}</h3>
              <h3>{file.frontmatter?.category}</h3>
              <p>{file.excerpt}</p>
            </article>
            <hr />
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          category
          date(formatString: "YYYY.MM.DD")
          title
          author
          slug
        }
        excerpt(pruneLength: 30)
      }
    }
  }
`;
