//11.31. Parâmetros nas rotas - 2', 11.32. Introdução à tratativa de erros com Next
import { Post, PostService } from "marcioasan-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostProps {
  post?: Post.Datailed;
}

export default function PostPage(props: PostProps) {
  return <div>{props.post?.title}</div>;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> =
  async ({ params }) => {
    try {
      if (!params) return { notFound: true };

      const { id } = params;
      const postId = Number(id);

      if (isNaN(postId)) return { notFound: true };

      const post = await PostService.getExistingPost(postId);

      return {
        props: {
          post,
        },
      };
    } catch (err) {
      return {
        props: {},
      };
    }
  };