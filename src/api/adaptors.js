export function getNewsList(apiResponse) {
  // Daca raspunsul api-ului nu contine date, returnam un array gol.
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  // Extragem datele din raspunsul api-ului.
  const rawNewsList = apiResponse.response.results;
  // Mapam prin date si le transformam in formatul de care noi avem nevoie.
  const adaptedNewsList = rawNewsList.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });

  // Returnam datele adaptate.
  return adaptedNewsList;
}

export function getNewsDetails(apiResponse) {
  // Daca raspunsul api-ului nu contine date, returnam un array gol.
  if (!apiResponse || !apiResponse.response) {
    return {};
  }

  // Extragem datele din raspunsul api-ului.
  const rawNewsDetails = apiResponse.response.content;
  // Extragem din raspuns campurile de interes si le salvam in cheile corespunzatoare.
  const adaptedNewsDetails = {
    date: rawNewsDetails.webPublicationDate,
    title: rawNewsDetails.fields.headline,
    description: rawNewsDetails.fields.trailText,
    image: rawNewsDetails.fields.main,
    content: rawNewsDetails.fields.body,
    author: rawNewsDetails.fields.byline,
    thumbnail: rawNewsDetails.fields.thumbnail,
  };

  // Returnam datele adaptate
  return adaptedNewsDetails;
}
