import { getPosts } from "../../api/post.api";
import { useEffect, useState } from "../../lib";
import { PostType } from "../../types/Post.type";
import Post from "../Post/Post";
import Skeleton from "../Skeleton";

export default function PostList() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(async () => {
    const res = await getPosts();
    setPosts(res.data);
  }, []);
  if (posts.length === 0) {
    return Skeleton();
  }
  return `<div class="mx-auto px-3 py-6">
            <div class="mb-6 text-2xl font-bold">
                <div class="flex items-baseline justify-between">
                <div>
                    <span
                    class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                    >Posts</span
                    >
                </div>
                <div class="text-sm">
                    <a href="/demo/astro-boilerplate/posts">View all Posts →</a>
                </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                ${posts.map((post) => `<div>${Post({ post })}</div>`).join("")}
            </div>
        </div>`;
}
