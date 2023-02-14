import { PostType } from "../../types/Post.type";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  return `<div>
  <a class="hover:translate-y-1" href="/posts/${post.id}">
    <div class="overflow-hidden rounded-md bg-slate-800">
        <div class="aspect-w-3 aspect-h-2">
        <img
            class="h-full w-full object-cover object-center"
            src="${post.image}"
            alt="Image post"
            loading="lazy"
        />
        </div>
        <div class="px-3 pt-4 pb-6 text-center">
        <h2 class="text-xl font-semibold line-clamp-1">${post.title}</h2>
        <div class="mt-1 text-xs text-gray-400">${post.createdAt}</div>
        <div class="mt-2 text-sm line-clamp-3">
            ${post.content}
        </div>
        </div>
    </div>
  </a>
  </div>`;
}
