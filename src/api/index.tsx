export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=br&apiKey=${process.env.API_TOKEN_NEWS}`
  )
  return newsData.json()
}
