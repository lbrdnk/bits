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

function maybePeriod(title: string): string {
  return title.match(/\.$/) ? "" : "."
}

function maybeAddPeriod(text: string): string {
  return text.replace(/\.?$/, ".")
}

export function PostThumb({ createdAt, gist, id, slug, title }: PostThumbProps) {

  const publishedAt = formatDate(createdAt)
  let titleNormalized = title || "Untitled";

  // rework layout, flex -> grid?, grid lebo to co mam je kompliko
  return (
    <article
      className="px-1
      [&:not(:first-child)]:pt-2 [&:not(:first-child)]:border-t-2 [&:not(:first-child)]:mt-2
      md:grid md:grid-cols-[minmax(10ch,1fr)_max-content] md:grid-rows-[auto_auto]
      flex flex-col"
    >
      <Link
        className="text-lg  hover:text-purple-700 text-blue-700"
        href={`/bits/${slug}`}
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
