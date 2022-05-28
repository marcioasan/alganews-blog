//11.31. Parâmetros nas rotas - 2', 11.32. Introdução à tratativa de erros com Next
import { Post, PostService } from "marcioasan-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostProps extends NextPageProps {
  post?: Post.Datailed;
}

export default function PostPage(props: PostProps) {
  //11.33. Recebendo informações do erro na página - 3'30"
  // if (props.error) //removido na aula 11.34. Reutilizando a lógica de renderização de erro - 5'20"
  //   return <div style={{ color: "red" }}>{props.error.message}</div>;

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
    } catch (error: any) { //precisou tipar como any, pois estava com erro. ver pergunta no suporte. https://app.algaworks.com/forum/topicos/85875/erro-no-error
      console.log(error)
      return {
        props: {
          //11.33. Recebendo informações do erro na página
          error: {
            message: error.message
          }
        },
      };
    }
  };