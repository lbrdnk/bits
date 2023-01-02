import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostThumb, PostThumbProps } from '../components/PostThumb'
import { postThumbs } from '../lib/requests'

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = await postThumbs()
  return {
    props: {
      postThumbs: pt
    }
  }
}

export default function Home({ postThumbs }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {postThumbs?.map((props: PostThumbProps, idx: number) => (
        <PostThumb key={props.id} {...props} />
      ))}
    </>
  )
}
