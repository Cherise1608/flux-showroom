export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

  try {
    const response = await fetch('https://jescacherise.substack.com/feed');
    const xml = await response.text();

    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    const articles = items.map(item => {
      const title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1]
        || item.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1];
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1];
      const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
        || item.match(/<description>([\s\S]*?)<\/description>/)?.[1]
        || '';

      return {
        title: title?.trim(),
        link: link?.trim(),
        date: pubDate
          ? new Date(pubDate).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })
          : '',
        description: description.replace(/<[^>]*>/g, '').substring(0, 120).trim() + '...',
      };
    }).slice(0, 3);

    return res.status(200).json(articles);
  } catch {
    return res.status(500).json({ error: 'Kunne ikke hente artikler' });
  }
}
