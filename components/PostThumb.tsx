export type PostThumb = {
  createdAt: string,
  gist: string,
  id: string,
  title: string,
  updatedAt: string
}

export type PostThumbProps = PostThumb

export function PostThumb({ createdAt, gist, id, title, updatedAt }: PostThumbProps) {

  return (
    <>
      <div>{id}</div> <div>{title}</div> <div>{gist}</div>
      <div>{createdAt}</div> <div>{updatedAt}</div>
    </>
  )
}