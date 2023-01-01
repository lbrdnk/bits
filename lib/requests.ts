type ContentfulPost = {
  sys: {
    id: string;
    // createdAt: string,
    createdAt: string;
    // firstPublishedAt: string
  };
  fields: {
    content?: string;
    gist?: string;
    slug: string;
    title?: string;
  };
};

type Post = {
  content?: string;
  gist?: string;
  id: string;
  slug: string;
  title?: string;
  createdAt: string;
};

const postThumbsUrl =
  `${process.env.CMS_BASE_URL}` +
  `/spaces/${process.env.CMS_SPACE_ID}` +
  `/environments/${process.env.CMS_ENV_ID}` +
  `/entries/` +
  `?access_token=${process.env.CMS_ACCESS_TOKEN}` +
  `&content_type=post` +
  `&select=fields.gist,fields.slug,fields.title,sys.id,sys.createdAt` +
  `&order=-sys.createdAt`;

export async function postThumbs() {
  const res = await fetch(postThumbsUrl);
  const body = await res.json();
  const postThubms = body.items.map((item: ContentfulPost) => ({
    ...(item.fields.gist && {gist: item.fields.gist}),
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    createdAt: item.sys.createdAt
  }));
  return postThubms;
}

const postsSlugsUrl =
  `${process.env.CMS_BASE_URL}` +
  `/spaces/${process.env.CMS_SPACE_ID}` +
  `/environments/${process.env.CMS_ENV_ID}` +
  `/entries/` +
  `?access_token=${process.env.CMS_ACCESS_TOKEN}` +
  `&content_type=post` +
  `&select=fields.slug`;

export const postsSlugs: () => Promise<string[]> = async () => {
  const res = await fetch(postsSlugsUrl);
  const body = await res.json();
  const slugs = body.items.map((item: ContentfulPost) => item.fields.slug);
  return slugs;
};

function postBySlugUrl(slug: string): string {
  return (
    `${process.env.CMS_BASE_URL}` +
    `/spaces/${process.env.CMS_SPACE_ID}` +
    `/environments/${process.env.CMS_ENV_ID}` +
    `/entries/` +
    `?access_token=${process.env.CMS_ACCESS_TOKEN}` +
    `&content_type=post` +
    `&fields.slug=${slug}`
  );
}

// TODO ?enforce not []
export const postBySlug = async (slug: string): Promise<Post> => {
  const res = await fetch(postBySlugUrl(slug));
  const body = await res.json();
  // here
  const [post]: [Post] = body.items.map((item: ContentfulPost) => ({
    content: item.fields.content,
    ...(item.fields.gist && { gist: item.fields.gist }),
    id: item.sys.id,
    ...(item.fields.slug && { slug: item.fields.slug }),
    title: item.fields.title,
    createdAt: item.sys.createdAt,
  }));
  return post;
};
