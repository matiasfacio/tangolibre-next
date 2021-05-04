import { useRouter } from "next/router";
import { connectToDatabase, ObjectID } from "../../util/mongodb";
import { Section, PostContainer } from "../../styles/globalstyles";

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const { postId } = context.query;


  const post = await db.collection("blogs").find({_id:ObjectID(postId)});
  console.log(post)

  return {
    props: {
      post: "text"
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <Section>
      <PostContainer>
        <h3>PostId: {postId}</h3>
        <p>{post?.title}</p>
      </PostContainer>
    </Section>
  );
};

export default Post;
