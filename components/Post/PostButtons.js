import { useState } from "react";
import axios from "axios";
import Link from "next/link";

import {
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";

export default function PostButtons({
  username,
  id,
  likesCount: likesCountDefault = 0,
  likedByMe: likedByMeDefault = false,
  commentsCount,
}) {
  const [likesCount, setLikesCount] = useState(likesCountDefault);
  const [likedByMe, setLikedByMe] = useState(likedByMeDefault);
  async function toggleLike() {
    const response = await axios.post("/api/like", { id });
    if (response.data?.like) {
      setLikesCount((prev) => prev + 1);
      setLikedByMe(true);
    } else {
      setLikesCount((prev) => prev - 1);
      setLikedByMe(false);
    }
  }
  return (
    <div className="flex justify-between mr-12 text-twitterLightGray text-sm mt-1">
      <Link href={`/${username}/status/${id}`}>
        <div className="flex cursor-pointer">
          <ChatBubbleLeftRightIcon className="w-5 h-5 mr-1" />
          <span>{commentsCount}</span>
        </div>
      </Link>
      <button className="flex">
        <ArrowPathIcon className="w-5 h-5 mr-1" />
        <span>0</span>
      </button>
      <button
        className={
          (true ? "text-red-500 fill-red-500 " : "") + "flex items-center"
        }
        onClick={toggleLike}
      >
        <HeartIcon className="w-5 h-5 mr-1 fill-inherit" />
        <span>111</span>
      </button>
      <button className="flex">
        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
      </button>
    </div>
  );
}
