import React from "react";
import Layout from "../componenets/Layout";
import Seo from "../componenets/Seo";

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <p>We are the happiness stickers store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
