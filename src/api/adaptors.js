export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const rawNewsList = apiResponse.response.results;
  const adaptedNewsList = rawNewsList.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });

  return adaptedNewsList;
}
