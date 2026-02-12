const fs = require('fs');
const path = require('path');

async function fetchSubstackArticles() {
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

  const outPath = path.join(__dirname, '..', 'public', 'substack-articles.json');
  fs.writeFileSync(outPath, JSON.stringify(articles, null, 2));
  console.log(`Wrote ${articles.length} articles to ${outPath}`);
}

fetchSubstackArticles().catch(err => {
  console.error('Failed to fetch Substack feed:', err);
  process.exit(1);
});
