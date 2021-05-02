import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const posts = await db
    .collection("blogs")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(posts);
};
