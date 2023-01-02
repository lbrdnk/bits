import Link from "next/link"

export type PostThumb = {
  createdAt: string,
  gist: string,
  id: string,
  slug: string,
  title: string,
}

export type PostThumbProps = PostThumb

function formatDate(dateStr: string) {
  return new Date(dateStr).toDateString()
}

export function PostThumb({ createdAt, gist, id, slug, title }: PostThumbProps) {

  const publishedAt = formatDate(createdAt)
  let titleNormalized = title || "Untitled";

  // todo reiterate md:grid
  // todo float time to first baseline in heading / gist text block
  return (
    <article
      className="px-1 md:px-2
      [&:not(:first-child)]:pt-2 [&:not(:first-child)]:border-t-2 [&:not(:first-child)]:mt-2

      flex flex-col"
    >
      <Link
        className="hover:text-purple-700 text-blue-700"
        href={`/post/${slug}`}
      >
        {titleNormalized}
      </Link>
      <time
        className="block font-mono text-xs"
      >
        {publishedAt}
      </time>
      {gist && <p className="mt-1 text-justify">{gist}</p>}
    </article>
  )
}
