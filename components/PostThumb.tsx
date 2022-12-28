import Link from "next/link"

export type PostThumb = {
  createdAt: string,
  gist: string,
  id: string,
  title: string,
  updatedAt: string
}

export type PostThumbProps = PostThumb

const longLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestie neque. Pellentesque quis lectus egestas, cursus eros in, dapibus nulla. Aenean eget iaculis leo. Cras varius aliquet justo, vel faucibus odio feugiat ultrices. Integer posuere ut leo eget porta. Quisque bibendum tincidunt rutrum. Fusce maximus et erat ornare viverra. Phasellus sit amet consectetur tellus. Integer eget tellus quam. Nulla pharetra tempor egestas. Maecenas vehicula euismod faucibus. Donec nec sollicitudin nulla. Proin risus massa, pulvinar nec aliquam vitae, convallis sed lacus."

function formatDate(dateStr: string) {
  return new Date(dateStr).toDateString()
}

function maybeAddFullStop(text: string): string {
  return text.replace(/\.?$/m, ". ")
}

function maybePeriod(title: string): string {
  return title.match(/\.$/) ? "" : "."
}

export function PostThumb({ createdAt, gist, id, title, updatedAt }: PostThumbProps) {

  const publishedAt = formatDate(updatedAt)

  return (
    <article className="flex flex-col">
      <section>
        <nav>
          <h1 className="inline font-bold">
            <Link
              className="inline text-blue-500 hover:text-purple-500"
              href={`/bits/${id}`}
            >
              <span className="underline underline-offset-2">{title}</span>
            </Link>
            {maybePeriod(title) + " "}
          </h1>
          {/* <p className="inline">{gist}</p> */}
          <p className="inline">{longLorem}</p>
        </nav>
      </section>
      <time className="text-xs">{publishedAt}</time>
    </article>
  )
}