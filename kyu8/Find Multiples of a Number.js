function findMultiples(integer, limit) {
    const arry = [];
    let inc = 1;
    while (inc * integer <= limit) {
      arry.push(inc * integer);
      inc++;
    }
    return arry;
  }
  
  function findMultiples(integer, limit) {
    let result = []
    for(let i = 1; i <= limit; i++){
      if(i % integer == 0) result.push(i)
    }
    return result
  }
  