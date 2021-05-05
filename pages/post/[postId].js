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

    // * :::::: it is also possible to pass the paths in this way, without the object with the params key in it for each path ---> 
  // let paths = posts.map(post => {
  //   return `/post/${post._id}`
  // })

  return {
    paths: [],
    fallback: true,
  }


  // * :::::another wayo of passing the paths::::
  // const paths = posts.map((post) => ({
  //   params: {
  //     postId: post._id.toString(),
  //   },
  // }));

  // return {
  //   paths,
  //   fallback: false,
  // };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const { postId } = params;

  const post = await db
    .collection("blogs")
    .findOne({ _id: new BSON.ObjectId(postId) });

  const data = await JSON.parse(JSON.stringify(post))

  return {
    revalidate: 1,
    props: {
      post: data,
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
