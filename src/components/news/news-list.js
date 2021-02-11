/**
 * This is a react component to query
 * all news articles and render them
 * as list
 */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import NewsArticle from "./news-article";

const NewsList = () => {
  const data = useStaticQuery(newsQuery);
  const news = data.allMdx.edges;
  return (
    <>
      <h1>News</h1>
      {news.map(({ node: item }) => (
        <NewsArticle
          key={item.id}
          slug={item.slug}
          title={item.frontmatter.title}
          excerpt={item.frontmatter.excerpt}
          date={item.data}
        />
      ))}
    </>
  );
};

const newsQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            excerpt
            date
          }
        }
      }
    }
  }
`;

export default NewsList;
