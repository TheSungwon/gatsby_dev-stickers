import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../componenets/Layout";
import Seo from "../componenets/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="welcome to DevStickers !!!">
      <div></div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;

//export const Head: HeadFC = () => <title>Home Page</title>
