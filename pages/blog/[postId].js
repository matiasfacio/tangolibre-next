import { connectToDatabase } from "../../util/mongodb";
import { Section, PostContainer } from "../../styles/globalstyles";
import { BSON } from "bson";
import { Title, Snippets } from "../blog";
import styled from "styled-components";

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("blogs")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  const paths = posts.map((post) => ({
    params: {
      postId: post._id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const { postId } = params;

  // console.log(postId);
  const post = await db
    .collection("blogs")
    .findOne({ _id: new BSON.ObjectId(postId) });

  return {
    revalidate: 1,
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}

const Post = ({ post }) => {
  return (
    <Section>
      <PostContainer>
        {post && (
          <>
            <Title>{post?.title}</Title>
            <Snippets>{post?.snippet}</Snippets>
            <FullBody>{post?.body}</FullBody>
          </>
        )}
      </PostContainer>
    </Section>
  );
};

export default Post;

export const FullBody = styled.div`
  padding: 20px 2em;
  color: white;
  font-size: 1.6rem;
  white-space: pre-wrap;
  background-color: #232324;
  word-wrap: break-word;
  line-height: 1.8em;
`;
