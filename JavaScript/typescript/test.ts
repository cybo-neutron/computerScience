// function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
//   const adj = new Map<number, Array<number>>();
//   const vis = new Array(n).fill(false);
//     for (const [from, to] of edges) {

//     if (adj.has(from)) adj.set(from,[...adj.get(from),to] );
//     else adj.set(from, [to]);

//     if (adj.has(to)) adj.set(to, [...adj.get(to), from]);
//     else adj.set(to, [from]);
//   }
//   console.log(adj)
//   return dfs(0, adj, hasApple, vis)[1];
// }

// function dfs(node, adj, hasApple, vis): [boolean, number] {
//   vis[node] = true;

//   let ans: [boolean, number] = [false, 0];
//   for (const v of adj[node]) {
//     if (!vis[v]) {
//       const res = dfs(v, adj, hasApple, vis);
//       ans[0] =Boolean(( ans[0] || res[0]));
//       if (res[0] == true) ans[1] = ans[1] + 2;
//     }
//   }
//   if (hasApple[node]) ans[0] = true;

//   return ans;
// }

// console.log(
//   minTime(
//     7,
//     [
//       [0, 1],
//       [0, 2],
//       [1, 4],
//       [1, 5],
//       [2, 3],
//       [2, 6],
//     ],
//     [false, false, true, false, true, true, false]
//   )
// );

const adj = new Map<number, number[]>();
adj.set(1, [2]);
adj.set(1, [...adj.get(1), 4, 5, 6]);

console.log(adj);
console.log(adj.get(1));
