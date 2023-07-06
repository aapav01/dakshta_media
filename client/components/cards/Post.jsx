import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User2 } from "lucide-react";
import Heart from "../svg/Heart";

export default function Post({
  post,
  handleDelete,
  handleLike,
  handleUnlike,
  handleComment,
  commentsCount = 10,
  removeComment,
}) {
  return (
    <>
      {post && post.postedBy && (
        <Card className="w-[350px]">
          <CardHeader>
            <Avatar>
              <AvatarImage
                src={post.postedBy.image.url}
                alt={post.postedBy.name}
              />
              <AvatarFallback>
                <User2 />
              </AvatarFallback>
            </Avatar>
            <CardTitle>{post.postedBy.name}</CardTitle>
            <CardDescription>{post.postedBy.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={post.content}></div>
          </CardContent>
          <CardFooter>
            {/* {post.image && <PostImage url={post.image.url} />} */}
            <div className="flex pt-2">
              <Heart />
              <div className="p-2">
                {post.likes.length} likes
              </div>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
