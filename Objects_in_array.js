let articles = [
  {
    title: 'My First Article.',
    description: 'Bacon ipsum dolor amet picanha t-bone filet mignon.',
    views: 30,
  },
  {
    title: 'My Second Article.',
    description: 'Bacon ipsum dolor amet picanha t-bone filet mignon.',
    views: 30,
  },
  {
    title: 'My 3th Article.',
    description: 'Bacon ipsum dolor amet picanha t-bone filet mignon.',
    views: 30,
  },
]


articles.forEach(article => {
  console.log(article.title);
  console.log(article.description);
  console.log('Views: ' + article.views);
  console.log('--------------------');
});
