const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

const oddOrEven = array => array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even'