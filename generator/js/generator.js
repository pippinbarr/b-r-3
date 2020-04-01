window.onload = generate;

let roomNumber = 10; // Needs to start after the last gallery room
let currentSpriteIndex = 0;
let currentSpriteRepeat = 1;
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function generate() {
  let output = '';

  // FRONT MATTER
  let frontMatter = {
    title: "b r 3",
    version: "# BITSY VERSION 6.5",
    roomFormat: "! ROOM_FORMAT 1"
  }

  let mainPalette = {
    id: 0,
    name: "default-palette",
    background: "183,180,183",
    tile: "70,93,213",
    sprite: "255,255,255"
  }

  waterData.forEach((water) => {
    setPaletteData(water);
    setPlinthRoomData(water);
  });

  // ROOMS
  let middleRoom = {
    id: 0,
    name: `middle-room`,
    palette: mainPalette
  }

  // Add plinth exits
  for (let i = 0; i < waterData.length; i++) {
    let water = waterData[i];
    water.room.destination = 0;
    middleRoom.exits = [];
    for (let x = 0; x <= 1; x++) {
      for (let y = -2; y <= -1; y++) {
        middleRoom.exits.push({
          source: {
            x: plinthPositions[i].x + x,
            y: plinthPositions[i].y + y,
          },
          destination: {
            room: water.plinthRoomNumber,
            x: 7,
            y: 6
          }
        });
      }
    }
  }


  // TILES

  // Wall and windows for the main room
  output += wall + win;

  // Block and plinth sides for plinth rooms
  output += block + plinthCloseLeft + plinthCloseRight;

  // AVATAR

  output += avatarSprite;

  // SPRITES

  // GENERATE WIDE VIEW PLINTHS
  for (let i = 0; i < waterData.length; i++) {
    output += getWidePlinthSprites(i);
  }

  // GENERATE CLOSE UP PLINTH LABELS
  for (let i = 0; i < waterData.length; i++) {
    output += getLabelSprites(i);
  }

  // DIALOG
  for (let i = 0; i < waterData.length; i++) {
    output += getWidePlinthDialog(i);
  }

  document.body.innerHTML = `<pre>${output}</pre>`;
}

function setPaletteData(water) {
  water.palette.id = i + 1;
  water.palette.name = `${water.prefix}-palette`
}

function setPlinthRoomData(water) {
  let roomData = {
    id: getNextRoomNumber(),
    roomData: `${plinthRoomData}`,
    name: `${water.prefix}`,
    palette: `${water.palette.id}`
  }
  water.plinthRoom = roomData;
}

function getWidePlinthSprites(i) {
  let data = waterData[i];
  let position = plinthPositions[i];

  let output = '';
  // left side
  output += `
SPR ${getNextSpriteSymbol()}
${wideViewPlinthLeftData}
NAME ${waterData[i].prefix}-wide-plinth-left
DLG ${data.prefix}-dialog
POS ${position.room} ${position.x},${position.y}
`

  // right side
  output += `
SPR ${getNextSpriteSymbol()}
${wideViewPlinthRightData}
NAME ${waterData[i].prefix}-wide-plinth-right
DLG ${data.prefix}-dialog
POS ${position.room} ${position.x + 1},${position.y}
`

  return output;
}

function getLabelSprites(i) {
  let water = waterData[i];
  let output = '';

  // left side
  output += `
SPR ${getNextSpriteSymbol()}
${closeViewLabelLeftData}
NAME ${water.prefix}-plinth-label-left
DLG ${water.prefix}-dialog
POS ${water.plinthRoomNumber} ${plinthLabelLeftPosition}
`

  // right side
  output += `
SPR ${getNextSpriteSymbol()}
${closeViewLabelRightData}
NAME ${water.prefix}-plinth-label-right
DLG ${water.prefix}-dialog
POS ${water.plinthRoomNumber} ${plinthLabelRightPosition}
`

  return output;
}


function getNextSpriteSymbol() {
  let spriteSymbol = '';
  for (let j = 0; j < currentSpriteRepeat; j++) {
    spriteSymbol += alphabet[currentSpriteIndex];
  }
  currentSpriteIndex++;
  if (currentSpriteIndex === alphabet.length) {
    currentSpriteIndex = 0;
    currentSpriteRepeat++;
  }
  return spriteSymbol;
}

function getNextRoomNumber() {
  return roomNumber++;
}

function getWidePlinthDialog(i) {
  return `
DLG ${waterData[i].prefix}-dialog
${waterData[i].title} by ${waterData[i].author}
`;

}