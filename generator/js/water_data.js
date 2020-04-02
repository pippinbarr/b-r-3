let waterData = [{
    title: "The World Has Been Sad Since Tuesday",
    author: "Fred Bednarski",
    prefix: "the-world-has-been-sad-since-tuesday",
    link: "https://vonbednar.itch.io/the-world-was-sad-since-tuesday",
    palette: {
      background: "156,162,166",
      tile: "90,133,173",
      sprite: "255,255,255"
    },
    tileName: `sad-tile`,
    tileData: sadTileData,
  },
  {
    title: "Everything Must Fall",
    author: "halkon",
    prefix: "everything-must-fall",
    link: "https://halkon.itch.io/everything-must-fall",
    palette: {
      background: "153,173,173",
      tile: "53,92,136",
      sprite: "255,255,255"
    },
    tileName: `fall-tile`,
    tileData: fallTileData,
  }
];

// Generate fake water

for (let i = 2; i < 24; i++) {
  waterData.push({
    title: "PLACEHOLDER",
    author: "PLACEHOLDER",
    prefix: `placeholder-${i}`,
    link: "https://www.pippinbarr.com",
    palette: {
      background: "153,173,173",
      tile: "53,92,136",
      sprite: "255,255,255"
    },
    tileName: `placeholder-tile-${i}`,
    tileData: fallTileData,
  })
}