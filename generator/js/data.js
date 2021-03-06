const signText = "Welcome to b r 3, a gallery of Bitsy water.";


// generate plinth positions
let room = 27;
let startX = 3;
let startY = 7;
let totalPositions = 24;

let plinthPositions = [];
for (let y = startY; y >= 4; y -= 3) {
  for (let x = startX; x <= 11; x += 4) {
    plinthPositions.push({
      room: room,
      x: x,
      y: y
    });
  }
  if (y === 4) {
    room++;
    y = 16;
  }
  if (plinthPositions.length === totalPositions) break;
}

console.log(plinthPositions);


const plinthLabelLeftPosition = {
  x: 7,
  y: 10
}

const plinthLabelRightPosition = {
  x: 8,
  y: 10
}

const linkPosition = {
  x: 10,
  y: 10
}

const frontMatter = `
b r 3

# BITSY VERSION 6.5

! ROOM_FORMAT 1
`;

const defaultPalette = `
PAL 0
NAME default-palette
170,187,255
85,85,255
255,255,255
`


// f = h-wall
// g = sw-corner
// h = se-corner

const frontRoomInteriorData = `0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,g,f,f,f,f,f,0,0,f,f,f,f,f,h,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0`;

// 0 = empty
// a = v-wall
// b = window
// c = block

const middleRoomInteriorData = `0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0`;

// f = h-wall
// l = nw-corner
// k = ne-corner
// a = v-wall
// b = window

const backRoomInteriorData = `0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,l,f,f,f,f,f,0,0,f,f,f,f,f,k,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,b,0,0,0,0,0,0,0,0,0,0,0,0,b,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0`;

// i = roof
// c = block

const frontRoomExteriorData = `0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,c,c,c,c,c,c,c,c,c,c,c,c,c,c,0
0,c,c,c,c,c,c,c,c,c,c,c,c,c,c,0
0,c,0,c,0,c,c,0,0,c,c,0,c,0,c,0
0,c,0,c,0,c,c,0,0,c,c,0,c,0,c,0
0,c,c,c,c,c,c,0,0,c,c,c,c,c,c,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0`;

// i = roof

const middleRoomExteriorData = `0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0`;

// i = roof
// j = roof with door

const backRoomExteriorData = `0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,i,i,i,i,i,i,j,j,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0
0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0`;

// The base data for a plinth room
// Does not include front or end matter (need to generate them)
const plinthRoomData = `p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p
p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p
p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p
p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p
p,p,p,p,c,c,c,c,c,c,c,c,p,p,p,p
p,p,p,p,c,c,c,c,c,c,c,c,p,p,p,p
p,p,p,p,c,c,c,c,c,c,c,c,p,p,p,p
p,p,p,p,c,c,c,c,c,c,c,c,p,p,p,p
p,p,p,p,c,c,c,c,c,c,c,c,p,p,p,p
p,p,p,p,n,m,m,m,m,m,m,o,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p
p,p,p,p,d,0,0,0,0,0,0,e,p,p,p,p`

// TILES

const wallVTileData = `00111100
00111100
00111100
00111100
00111100
00111100
00111100
00111100`;

const windowTileData = `00010000
00001000
00010000
00001000
00010000
00001000
00010000
00001000`

const blockTileData = `11111111
11111111
11111111
11111111
11111111
11111111
11111111
11111111`

const wallHData = `00000000
00000000
11111111
11111111
11111111
11111111
00000000
00000000`;

const swCornerData = `00111100
00111100
00111111
00111111
00111111
00111111
00000000
00000000`;

const seCornerData = `00111100
00111100
11111100
11111100
11111100
11111100
00000000
00000000`;

const roofData = `10101010
01010101
10101010
01010101
10101010
01010101
10101010
01010101`;

const roofDoorData = `00000000
00000000
00000000
00000000
10101010
01010101
10101010
01010101`;

const neCornerData = `00000000
00000000
11111100
11111100
11111100
11111100
00111100
00111100`;

const nwCornerData = `00000000
00000000
00111111
00111111
00111111
00111111
00111100
00111100`;

const plinthCloseLeftSideData = `10000000
10000000
10000000
10000000
10000000
10000000
10000000
10000000`

const plinthCloseRightSideData = `00000001
00000001
00000001
00000001
00000001
00000001
00000001
00000001`

const plinthCloseTopSideData = `11111111
00000000
00000000
00000000
00000000
00000000
00000000
00000000`

const plinthCloseNWCornerData = `11111111
10000000
10000000
10000000
10000000
10000000
10000000
10000000`

const plinthCloseNECornerData = `11111111
00000001
00000001
00000001
00000001
00000001
00000001
00000001`

const plinthRoomBackgroundData = `01010101
00000000
01010101
00000000
01010101
00000000
01010101
00000000`

// Temporarily here
const fallTileData = `00000001
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


// SPRITES

const avatarSpriteData = `00000000
00111100
01000010
10011001
10011001
01000010
00111100
00000000`;

const signSpriteData = `00000000
11111111
10000001
10000001
10000001
11111111
00011000
00011000`

const wideViewPlinthLeftData = `11111111
11111100
11111100
11111111
11111111
11111111
11111111
11111111`;

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