type ContentfulPost = {
  sys: {
    id: string;
    // createdAt: string,
    updatedAt: string;
    // firstPublishedAt: string
  };
  fields: {
    title: string;
    gist: string | null;
    content?: string;
  };
};

export async function fetchPostThumbs() {
  const res = await fetch(process.env.CMS_INIT_POST_THUMBS_URL as string);
  const body = await res.json();
  const postThubms = body.items.map((item: ContentfulPost) => ({
    // createdAt: item.sys.createdAt,
    // firstPublishedAt: item.sys.firstPublishedAt,
    gist: item.fields.gist || null,
    id: item.sys.id,
    title: item.fields.title,
    updatedAt: item.sys.updatedAt,
  }));
  return postThubms;
}

function postUrl(id: string): string {
  return (
    `${process.env.CMS_BASE_URL}` +
    `/spaces/${process.env.CMS_SPACE_ID}` +
    `/environments/${process.env.CMS_ENV_ID}` +
    `/entries/${id}` +
    `?access_token=${process.env.CMS_ACCESS_TOKEN}`
  );
}

type Post = {
  id: string;
  title: string;
  content: string;
};

export async function fetchPost(id: string) {
  const res = await fetch(postUrl(id));
  const body = await res.json();
  const post = {
    id: body.sys.id,
    title: body.fields.title,
    content: body.fields.content,
  };
  return post;
}

const postIdsUrl =
  `${process.env.CMS_BASE_URL}` +
  `/spaces/${process.env.CMS_SPACE_ID}` +
  `/environments/${process.env.CMS_ENV_ID}` +
  `/entries/` +
  `?access_token=${process.env.CMS_ACCESS_TOKEN}` +
  `&select=sys.id`;

export const fetchPostIds = async (): Promise<string[]> => {
  const res = await fetch(postIdsUrl);
  const body = await res.json();
  const ids = body.items.map((item: ContentfulPost) => item.sys.id);
  return ids;
};
