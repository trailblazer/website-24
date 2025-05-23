import docsearch from '@docsearch/js';

import '@docsearch/css';

function my_transformItems(items) {
    return items.map((item) => {
      return {
        ...item,
        hierarchy: {...item.hierarchy, lvl1: "yo yo yo yo"},
      }
    })
  }

docsearch({
  container: '#docsearch',
  appId: 'LEN50BR1UK',
  indexName: 'trailblazer-website-24',
  apiKey: 'b1f311e280db1c40850ee82e08eb3449',
});
