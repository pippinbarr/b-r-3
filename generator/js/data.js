const plinthPositions = [{
    room: 0,
    x: 3,
    y: 2
  },
  {
    room: 0,
    x: 7,
    y: 2
  }
];

const plinthLabelLeftPosition = "7,10";
const plinthLabelRightPosition = "8,10";

const frontMatter = `
b r 3

# BITSY VERSION 6.5

! ROOM_FORMAT 1
`;

const defaultPalette = `
PAL 0
NAME default-palette
183,180,183
70,93,213
255,255,255
`

// KEY
// 0 = empty
// a = wall
// b = window
// c = block
// d = plinth closeup left side
// e = plinth closeup right side

const middleRoomData = `a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a
a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a`;

// The base data for a plinth room
// Does not include front or end matter (need to generate them)
const plinthRoomData = `0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,c,c,c,c,c,c,c,c,0,0,0,0
0,0,0,0,c,c,c,c,c,c,c,c,0,0,0,0
0,0,0,0,c,c,c,c,c,c,c,c,0,0,0,0
0,0,0,0,c,c,c,c,c,c,c,c,0,0,0,0
0,0,0,0,c,c,c,c,c,c,c,c,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0
0,0,0,0,d,0,0,0,0,0,0,e,0,0,0,0`

// TILES

const wall = `
TIL a
00111100
00111100
00111100
00111100
00111100
00111100
00111100
00111100
NAME wall
WAL true
`;

const win = `
TIL b
00010000
00001000
00010000
00001000
00010000
00001000
00010000
00001000
NAME window
`
const block = `
TIL c
11111111
11111111
11111111
11111111
11111111
11111111
11111111
11111111
NAME block
`

const plinthCloseLeft = `
TIL d
10000000
10000000
10000000
10000000
10000000
10000000
10000000
10000000
NAME plinth-close-left
WAL false
`

const plinthCloseRight = `
TIL e
00000001
00000001
00000001
00000001
00000001
00000001
00000001
00000001
NAME plinth-close-right
WAL false
`

// Temporarily here
const fallTileData = `
TIL fall
00000001
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
00000001
NAME fall-tile
WAL false
`

const sadTileData = `
TIL sad
00000000
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
11111111
NAME sad-tile
WAL false
`

// SPRITES

const avatarSprite = `
SPR A
00000000
00111100
01000010
10011001
10011001
01000010
00111100
00000000
POS 0 0,0
`; // Need to set room and location at some point

const wideViewPlinthLeftData = `11111111
11111100
11111100
11111111
11111111
11111111
11111111
11111111`; // These require the data, including SPR letter + DLG link + NAME + POS

const wideViewPlinthRightData = `11111111
00111111
00111111
11111111
11111111
11111111
11111111
11111111`

const closeViewLabelLeftData = `11111111
10000000
10000000
10000000
10000000
10000000
10000000
11111111`;

const closeViewLabelRightData = `11111111
00000001
00000001
00000001
00000001
00000001
00000001
11111111`;

const linkData = `00000000
00000000
01100110
10011001
10011001
01100110
00000000
00000000`;