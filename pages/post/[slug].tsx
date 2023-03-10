import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from 'react-markdown'
import { postBySlug, postsSlugs } from "../../lib/requests";

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await postsSlugs();
  const paths = ids.map((slug: string) => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context: InferGetStaticPropsType<typeof getStaticProps>) => {
  const post = await postBySlug(context.params.slug);
  return {
    props: {
      ...post
    }
  }
}

export default function Post({ title, content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ReactMarkdown className="p-1 prose break-words">
      {"# " + title + "\n" + content}
    </ReactMarkdown>
  )
}