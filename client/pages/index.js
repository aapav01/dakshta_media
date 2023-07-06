import Link from "next/link";
import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";

export default function HomePage() {
  return (
    <div>index</div>
  )
}


/* Retrieves post(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Post.find({});
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post._id = post._id.toString();
    return post;
  });

  return { props: { posts: posts } };
}
