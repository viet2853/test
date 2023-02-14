import { PostType } from "./../types/Post.type";
import { instance } from "./config.api";

export const getPosts = () => instance.get<PostType[]>("/posts");

export const getPost = (id: string) => instance.get<PostType>(`/posts/${id}`);

export const addPost = (body: Omit<PostType, "id">) =>
  instance.post<PostType>("/posts", body);

export const updatePost = (body: PostType) =>
  instance.put<PostType>(`/posts/${body.id}`, body);

export const deletePost = (id: string) => instance.delete(`/posts/${id}`);
