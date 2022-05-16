//11.25. Listando os posts
import { Post } from "marcioasan-sdk";

interface PostCardProps {
  post: Post.Summary;
}

export default function PostCard(props: PostCardProps) {
  return <div>{props.post.title}</div>;
}