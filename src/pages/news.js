import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NewsList from "../components/news/news-list";

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <NewsList />
    <hr />
    <Link to="/">Go Home</Link> <br />
  </Layout>
);

export default NewsPage;
