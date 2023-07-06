import React, { useState } from "react";
import Link from "next/link";
import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import HomeHero from "@/components/HomeHero";
import PostCard from "@/components/cards/Post";
import Mailbox from "@/components/svg/Mailbox";

export default function HomePage({ posts }) {
  const [newsFeed, setNewsFeed] = useState([]);
  const collection = newsFeed.length > 0 ? newsFeed : posts;
  return (
    <main>
      <HomeHero />
      <section className="container">
        {collection.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collection.map((post) => (
            <div key={post._id} className="col-md-4">
              <Link href={`/post/view/${post._id}`}>
                <PostCard key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>):(
        <div className="flex flex-col gap-8 items-center justify-center py-12 md:py-30 font-semibold text-xl">
          <Mailbox className="h-36" />
          <p>No Recent Activity</p>
          </div>)}
      </section>
    </main>
  );
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
