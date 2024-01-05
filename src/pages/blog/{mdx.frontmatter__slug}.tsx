import { graphql } from "gatsby";
import Layout from "../../componenets/Layout";

import React from "react";
import Seo from "../../componenets/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  console.log(image);
  return (
    <Layout title="">
      <div>
        <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
        {/* 로딩되는 동안 이미지의 가장 많이 사용되는 컬러가 placeholder로 채워져 있다가 로드됨 */}
        {/* placeholder: BLURRED 적용하면 로딩 블러처리 */}

        {children}
      </div>
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
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
