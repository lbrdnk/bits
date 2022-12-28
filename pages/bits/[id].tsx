import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { fetchPost, fetchPostIds } from "../../lib/requests";

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await fetchPostIds();
  return {
    paths: ids.map((id: string) => ({ params: { id } })),
    // TODO what is following for
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context: InferGetStaticPropsType<typeof getStaticProps>) => {
  const id = context.params.id
  const post = await fetchPost(id);
  return {
    props: {
      ...post
    }
  }
}

export default function Post({ id, title, content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div><div>{id}</div><div>{title}</div></div>
}