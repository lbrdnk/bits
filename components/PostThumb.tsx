import Link from "next/link"
import ReactMarkdown from 'react-markdown'

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
  // following redundant -- title enforced on cms level now?
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
        <ReactMarkdown>
          {titleNormalized}
        </ReactMarkdown>
      </Link>
      <time
        className="block font-mono text-xs"
      >
        {publishedAt}
      </time>
      {
        gist &&
        <ReactMarkdown className="mt-1">{gist}</ReactMarkdown>
      }
    </article>
  )
}
