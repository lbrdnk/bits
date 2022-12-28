export type PostThumb = {
  id: string,
  title: string,
  gist: string,
}

export type PostThumbProps = PostThumb

export function PostThumb({ id, title, gist }: PostThumbProps) {

  return (
    <>
      <div>{id}</div> <div>{title}</div> <div>{gist}</div>
    </>
  )
}