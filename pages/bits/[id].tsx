import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ReactMarkdown from 'react-markdown'
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
  // return <div><div>{id}</div><div>{title}</div></div>
  return (
    <>
    {/* <h1 className="prose">{title}</h1> */}
    <ReactMarkdown className="p-2 prose break-words" children={"# " + title + "\n\n" + content} />
    </>
  )
}