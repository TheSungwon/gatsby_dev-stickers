import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}
export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <title>
      {title} | {data?.site?.siteMetadata?.title}
    </title>
  );
}
