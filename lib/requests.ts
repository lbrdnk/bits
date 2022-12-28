type ContentfulPost = {
  sys: {
    id: string;
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
    id: item.sys.id,
    title: item.fields.title,
    gist: item.fields.gist,
  }));
  return postThubms;
}
