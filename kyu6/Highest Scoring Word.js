function high(x){
    let numArray = x.split(' ').map((e, i) => [...e].map(x => x.charCodeAt(0) - 96 ) )
    let reducedArray = ((numArray.map(e => e.reduce((a,b) => a + b))))
    let index = reducedArray.indexOf(Math.max(...reducedArray))
    return x.split(' ')[index]
  }

  function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0))
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }

  function high(s){
    let a = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0))
    return s.split(' ')[a.indexOf(Math.max(...a))];
  }

  function high(x){
    let y = x.split(' ').map(e => [...e].reduce((a,b) => a + b.charCodeAt(0) - 96, 0))
    return x.split(' ')[y.indexOf(Math.max(...y))]
}

function high(x){
  let y = x.split(' ').map(e => e.split('').reduce((a,b) => a + b.charCodeAt(0) - 96, 0))
  return x.split(' ')[y.indexOf(Math.max(...y))]
}

function high(x){
  let y = x.toLowerCase().split(' ').map(e => e.split('').reduce((a,b) => a + b.charCodeAt() - 96, 0))
  return x.split(' ')[y.indexOf(Math.max(...y))]
}

function high(x){
  let y = x.split(' ').map(e => [...e].reduce((a,b) => a + b.charCodeAt() - 96, 0))
  return x.split(' ')[y.indexOf(Math.max(...y))]
}