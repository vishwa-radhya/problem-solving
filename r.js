const findAnagrams = (s, p)=> {
    // let set = new Set(p.split(''))
    let res=[]
    let pLen = p.length
    for(let i=0;i<=s.length-pLen;i++){
        let c=0
        let map = new Map()
        for(let f of p){
            map.set(f,(map.get(f) || 0)+1)
        }
        for(let j=i;j<i+pLen && j<s.length;j++){
            if(map.has(s[j]) && map.get(s[j])>0) {
                c++
                map.set(s[j],map.get(s[j])-1)
            }
        }
        if(c==pLen) res.push(i)
    }
    return res
    //works but tle at 33/65 cases
};
// console.log(findAnagrams('cbaebabacd','abc'))
// console.log(findAnagrams('baa','aa'))

function find_lucky_stone_pairs(p,n,m,stones){
    let pairCount=0
    for(let i=0;i<p-1;i++){
        for(let j=i+1;j<p;j++){
            if((stones[i]%n==0 || stones[i]%m==0) && (stones[j]%n==0 || stones[j]%m==0)){
                console.log(stones[i],stones[j])
                pairCount++
            }
        }
    }
    return pairCount
    // let valid = stones.filter(x => x % n === 0 || x % m === 0);
    // let count = valid.length;
    // return (count * (count - 1)) / 2;
}
// console.log(find_lucky_stone_pairs(5,2,3,[6,9,12,15,18]))

var compose = function(functions) {
    return function(x) {
        if(!functions.length) return x
        // let val=functions[functions.length-1](x);
        for(let i=functions.length-1;i>=0;i--){
            x=functions[i](x)
        }
        return x
    }
};
// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(4))
// 70ms with 5.8% beat || next one 62ms with 12.07% beat
function shortestPath(graph, start, target = "") {
  // Copy nodes into an unvisited list
  let unvisited = Object.keys(graph);
    // console.log("unvisited: ",unvisited)
  // Initialize distances (0 for start, Infinity for others)
  let distances = {};
  for (let node in graph) {
      distances[node] = node === start ? 0 : Infinity;
    }
    // console.log("distances: ",distances)

  // Initialize paths (empty arrays for each node)
  let paths = {};
  for (let node in graph) {
    paths[node] = [];
  }
  paths[start].push(start);
//   console.log("paths: ",paths)
  // Main loop
  while (unvisited.length > 0) {
    // console.log("unvisited: ",unvisited)
    // Pick unvisited node with smallest distance
    let current = unvisited.reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );
    // console.log("current: ",current)

    // Relax neighbors
    for (let [neighbor, weight] of graph[current]) {
        // console.log("neighbor: ",neighbor,"weight: ",weight)
        // console.log("distance check update currDist+weight: ",distances[current]+weight,"neighbor dist: ",distances[neighbor])
      if (distances[current] + weight < distances[neighbor]) {
        // Update distance
        distances[neighbor] = distances[current] + weight;
        // console.log("distances: ",distances)

        // Update path
        // console.log("path update bef: ",paths)
        paths[neighbor] = [...paths[current]];
        // console.log("path update aft: ",paths)
        paths[neighbor].push(neighbor);
        // console.log("path update push: ",paths)
      }
    }

    // Remove current from unvisited
    unvisited = unvisited.filter(node => node !== current);
  }

  // Decide what to print
  let targetsToPrint = target ? [target] : Object.keys(graph);
  for (let node of targetsToPrint) {
    if (node === start) continue;
    console.log(
      `\n${start}-${node} distance: ${distances[node]}\nPath: ${paths[node].join(" -> ")}`
    );
  }
}
const myGraph = {
  A: [["B", 5], ["C", 3], ["E", 11]],
  B: [["A", 5], ["C", 1], ["F", 2]],
  C: [["A", 3], ["B", 1], ["D", 1], ["E", 5]],
  D: [["C", 1], ["E", 9], ["F", 3]],
  E: [["A", 11], ["C", 5], ["D", 9]],
  F: [["B", 2], ["D", 3]],
};

// shortestPath(myGraph, "A");
