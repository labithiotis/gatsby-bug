import { graphql } from 'gatsby';
import React from 'react';

import  Layout  from '../components/layout';
import  SEO  from '../components/seo';

export default function BlogPost(props) {
  console.log(props.data)
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.contentfulBlogPost.body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
}

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            slug
            title
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
