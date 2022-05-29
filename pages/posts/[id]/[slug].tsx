//11.39. Corrigindo o Slug
import { Post, PostService } from "marcioasan-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ResourceNotFoundError } from "marcioasan-sdk/dist/errors";
import Head from "next/head";

interface PostProps extends NextPageProps {
  post?: Post.Datailed;
  host?: string;
}

export default function PostPage(props: PostProps) {
  //11.40. URL Canônica - 1'40"
  return(
    <>
      <Head>
        <link rel="canonical" href={`http://localhost:3000/posts/${props.post?.id}/${props.post?.slug}`} />
      </Head>
      <div>{props.post?.title}</div>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> =
  async ({ params, res, req }) => {
    try {
      if (!params) return { notFound: true };

      const { id, slug } = params;
      const postId = Number(id);

      if (isNaN(postId)) return { notFound: true };

      const post = await PostService.getExistingPost(postId);

      // //11.40. URL Canônica - retirado nessa aula - 1'
      // if (slug !== post.slug) {
      //   res.statusCode = 301;
      //   res.setHeader("Location", `/posts/${post.id}/${post.slug}`);
      //   return { props: {} };
      // }

      return {
        props: {
          post,
          host: req.headers.host, //11.40. URL Canônica - 6'
        },
      };
    } catch (error: any) {
      if (error instanceof ResourceNotFoundError) {
        return { notFound: true };
      }
      return {
        props: {
          error: {
            message: error.message,
            statusCode: error.data?.status || 500,
          },
        },
      };
    }
  };