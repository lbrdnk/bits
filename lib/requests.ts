type ContentfulPost = {
  sys: {
    id: string,
    createdAt: string,
    updatedAt: string,
  };
  fields: {
    title: string;
    gist: string;
  };
};

export async function fetchPostThumbs() {
  const res = await fetch(process.env.CMS_INIT_POST_THUMBS_URL as string);
  const body = await res.json();
  const postThubms = body.items.map((item: ContentfulPost) => ({
    createdAt: item.sys.createdAt,
    gist: item.fields.gist,
    id: item.sys.id,
    title: item.fields.title,
    updatedAt: item.sys.updatedAt,
  }));
  return postThubms;
}
