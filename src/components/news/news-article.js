/**
 * This is a react component to render
 * single news article entry
 */
import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"

const NewsArticle = ({ title, excerpt, slug, date }) => (
  <>
    <hr />
    <Moment date={date} format="LLL" />
    <h4>{title}</h4>
    <p>{excerpt}</p>
    <Link to={slug}>read more...</Link>
  </>
)

export default NewsArticle
