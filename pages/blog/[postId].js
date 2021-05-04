import { useRouter } from "next/router";
import { connectToDatabase } from "../../util/mongodb";
import { Section, PostContainer } from "../../styles/globalstyles";
import { BSON } from "bson";
import { Title, Snippets, Body } from "../blog";
import styled from "styled-components";

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const { postId } = context.query;

  const post = await db
    .collection("blogs")
    .findOne({ _id: new BSON.ObjectId(postId) });
  console.log(post);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <Section>
      <PostContainer>
        <Title>{post?.title}</Title>
        <Snippets>{post?.snippet}</Snippets>
        <FullBody>{post?.body}</FullBody>
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
