import React from "react";
import { Section, BlogContainer } from "../styles/globalstyles";
import { connectToDatabase } from "../util/mongodb";
import styled from "styled-components";

function blog({ posts }) {
  return (
    <Section>
      <BlogContainer>
        <h2>Blog</h2>
        {posts?.map((post, index) => {
          return <div key={post._id}>
            <Title>
              {index + 1}) {post.title}
            </Title>
            <Snippets>{post.snippet}</Snippets>
            <Body>{post.body}</Body>
          </div>;
        })}
      </BlogContainer>
    </Section>
  );
}

export default blog;

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const posts = await db

    .collection("blogs")

    .find({})

    .sort({ metacritic: -1 })

    .limit(30)

    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export const Title = styled.div`
  padding-top: 50px;
  color: #f25872;
  font-size: 2.2rem;
`;

export const Snippets = styled.div`
  color: #ff8638;
  font-size: 1.8rem;
  padding: 20px 2em;
`;

export const Body = styled.div`
  padding: 20px 2em;
  color: white;
  font-size: 1.6rem;
  white-space: pre-wrap;
  background-color: #232324;
`;
