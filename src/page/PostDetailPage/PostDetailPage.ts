import { getPost } from "../../api/post.api";
import Skeleton from "../../components/Skeleton";
import { useEffect, useState } from "../../lib";
import { PostType } from "../../types/Post.type";

interface Props {
  [key: string]: string;
}

export default function PostDetailPage(data: Props | null) {
  const [post, setPost] = useState<PostType>({} as PostType);
  let id = (data as Props).id;

  useEffect(async () => {
    if (id) {
      const res = await getPost(id);
      setPost(res.data);
    }
  }, [id]);
  if (!post) {
    return Skeleton();
  }
  return ` <div>
            <h2 class="text-4xl font-extrabold">${post.title}</h2>
            <h4 class="mt-1 font-semibold text-blue-700"> by ${post.author}, ${post.createdAt}</h4>
            <p class="mt-3 text-lg font-normal text-gray-300">${post.subTitle}</p>
            <div class="my-4">
              <img class="max-h-80 w-full object-cover" src="${post.image}" />
            </div>
            <div>
              <p class="text-lg font-normal">${post.content}</p>
            </div>
        </div>`;
}
