import { connectToDatabase } from "../../util/mongodb";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const { db } = await connectToDatabase();
  const session = getSession(req, res);

  if (session.user.email === process.env.ADMIN_EMAIL) {
    const posts = await db
      .collection("blogs")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    res.json(posts);
  } else {
    res.json({message: `error authenticating user: the user ${session.user.name} has not privileges`})
  }
});
