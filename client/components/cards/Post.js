import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      {post && post.postedBy && (<Card className="w-[350px]">
        <CardHeader>

        </CardHeader>
      </Card>)}
    </>
  );
}
