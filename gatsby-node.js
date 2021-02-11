/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require("path")
// Create pages for our news entry on gatsby build. This is called once
// the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const newsQuery = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // handle errors
  if (newsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // create pages for each news article
  const newsArticleTemplate = path.resolve(`src/templates/news-article-page.js`)
  newsQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `news/${node.slug}`,
      component: newsArticleTemplate,
      context: {
        // pass down slug as context
        slug: node.slug,
      },
    })
  })
}
