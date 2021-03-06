import React from "react";
import { Link, graphql } from "gatsby";
import Moment from "react-moment";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NewsArticleTemplate = ({ data }) => {
  const {
    body,
    frontmatter: { title, excerpt, date },
  } = data.mdx;
  return (
    <Layout>
      <SEO title={`News | ${title}`} description={excerpt} />
      <h1>{title}</h1>
      <p>
        <Moment date={date} format="LLL" />
      </p>
      <MDXRenderer>{body}</MDXRenderer>
      <Link to="/news/">All news</Link>
      <br />
      <Link to="/">Go Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query NewsArticle($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date
      }
    }
  }
`;

export default NewsArticleTemplate;
