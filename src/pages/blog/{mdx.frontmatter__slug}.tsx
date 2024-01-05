import { graphql } from "gatsby";
import Layout from "../../componenets/Layout";

import React from "react";
import Seo from "../../componenets/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data);
  console.log(children);
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        title
        slug
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
