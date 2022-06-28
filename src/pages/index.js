import React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage src="../images/clifford.jpg"></StaticImage>
      <p>I'm coming~~~~~</p>
    </Layout>
    
  );
};

export default IndexPage