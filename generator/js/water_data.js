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
    tileData: [
      `00000000
01010101
10101010
01010101
11111111
11111111
11111111
11111111
>
01010101
10101010
01010101
11111111
11111111
11111111
11111111
11111111`,
    ],
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
    tileData: [
      `00000001
00000010
00001100
11110000
00000111
11001000
00001000
00110010
>
00000010
00001100
11110000
00000111
11001000
00001000
00110010
00000001`
    ],
  },







  {
    title: "Flotsam",
    author: "mark wonnacott",
    prefix: "flotsam",
    link: "https://candle.itch.io/flotsam",
    palette: {
      background: "0,36,89",
      tile: "72,170,170",
      sprite: "179,217,215"
    },
    tileData: [
      `01100000
10010000
01100000
00000110
00001001
00000110
00110000
00000000
>
00000000
01100000
00000000
00000000
00000110
00110000
01001000
00110000`,
      `00000000
00000000
00000000
00000000
00100000
01010000
00100000
00000000
>
00000000
00000000
00000000
00000000
00000000
00100000
00000000
00000000`
    ],
  },






  {
    title: "sandcastles",
    author: "eevee",
    prefix: "sandcastles",
    link: "https://eevee.itch.io/sandcastles",
    palette: {
      background: "97,78,70",
      tile: "237,108,91",
      sprite: "181,114,101"
    },
    tileData: [
      `11111111
00000111
11111001
11111110
11111111
00001111
00000011
00000000
>
11111110
11111111
11111111
00001111
00000011
11100000
00011000
00000111`,
      `11111111
11111110
11100001
00011111
11111111
11111100
11000000
00000000
>
00111111
11111111
11111111
11111100
11000000
00000111
01111000
10000000`,
      `11111111
11111111
11111111
11111111
11100011
11111111
11111111
11111111
>
11111111
11111111
11111111
11100111
11011001
11111111
11111111
11111111`,
      `11111111
11111111
11111111
11110011
11111111
11111111
11111111
11111111
>
11111111
11111111
11111111
11111111
11111111
11111111
11111111
11000011`,
      `11111111
11111111
11111111
11111111
11110011
10111111
11111111
11111111
>
11111111
11111111
11111101
11111111
11111111
11111111
11100011
11111111`
    ],
  },




  {
    title: "The Thing in the Lake",
    author: "chiropteram",
    prefix: "thing-in-the-lake",
    link: "https://chiropteram.itch.io/the-thing-in-the-lake",
    palette: {
      background: "117,156,126",
      tile: "0,0,0",
      sprite: "0,0,0"
    },
    tileData: [
      `100000000
10000000
01100000
00010000
00010000
00001000
00001000
00000111
>
01100000
00010000
00010000
00001000
00001000
00000111
00000000
00000000`
    ],
  },






  {
    title: "Seven Simple Wonders",
    author: "Candal",
    prefix: "seven-simple-wonders",
    link: "https://candal.itch.io/sevensimplewonders",
    palette: {
      background: "195,251,228",
      tile: "131,124,114",
      sprite: "255,189,87"
    },
    tileData: [
      `11111111
10011111
11111111
11111000
11111111
00011111
11111111
11111111
>
11111111
11001111
11111111
11110001
11111111
10001111
11111111
11111111`
    ],
  },



];





// Generate fake water to fill the remainder of the 24

for (let i = waterData.length; i < 24; i++) {
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
    tileData: [fallTileData],
  })
}