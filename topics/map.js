console.log("pravin");

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  console.log(key, "-", value);
}

const games = {
  game1: "NFS",
  game2: "spider",
};

for (const [key, value] of games) {
  //not iterate in objects , iterate in map function
  console.log(key);
}

