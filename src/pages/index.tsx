import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../componenets/Layout";
import Seo from "../componenets/Seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="welcome to DevStickers !!!">
      <div>
        <StaticImage
          // StaticImage는 원본이미지에서 변형되는게 아니라
          // 변형된 이미지로 변경된 다음 보여줌
          height={300}
          src="https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Stickers on the wall"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;

//export const Head: HeadFC = () => <title>Home Page</title>
