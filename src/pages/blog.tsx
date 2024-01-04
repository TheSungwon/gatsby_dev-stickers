import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

function Blog({
  data: {
    allFile: { nodes },
  },
}: PageProps<Queries.MyQueryQuery>) {
  console.log(nodes);
  return (
    <Layout title="Blog">
      <ul>
        {nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`;
