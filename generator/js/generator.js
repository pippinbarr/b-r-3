window.onload = generate;

let roomNumber = 10; // Needs to start after the last gallery room
let currentSpriteIndex = 0;
let currentSpriteRepeat = 1;
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function generate() {
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

  waterData.forEach((water, index) => {
    setPaletteData(water, index);
    setPlinthRoomData(water);
  });

  // ROOMS
  let middleRoom = {
    id: 0,
    name: `middle-room`,
    data: middleRoomData,
    palette: mainPalette
  }

  // Add plinth exits
  middleRoom.exits = [];
  for (let i = 0; i < waterData.length; i++) {
    let water = waterData[i];
    water.plinthRoom.return = {
      id: 0,
      x: plinthPositions[i].x,
      y: plinthPositions[i].y + 1
    };
    for (let x = 0; x <= 1; x++) {
      for (let y = -2; y <= -1; y++) {
        middleRoom.exits.push({
          source: {
            x: plinthPositions[i].x + x,
            y: plinthPositions[i].y + y,
          },
          destination: {
            id: water.plinthRoom.id,
            x: 7,
            y: 6
          }
        });
      }
    }
  }

  for (let i = 0; i < waterData.length; i++) {
    setPlinthRoomExits(waterData[i]);
  }

  // TILES

  let tiles = [];

  tiles.push({
    id: `a`,
    name: `wall`,
    wall: true,
    data: wallTileData
  });

  tiles.push({
    id: `b`,
    name: `window`,
    wall: true,
    data: windowTileData
  });

  tiles.push({
    id: `c`,
    name: `block`,
    wall: false,
    data: blockTileData
  });

  tiles.push({
    id: `d`,
    name: `plinth-close-left-side`,
    wall: false,
    data: plinthCloseLeftSideData
  });

  tiles.push({
    id: `e`,
    name: `plinth-close-right-side`,
    wall: false,
    data: plinthCloseRightSideData
  });

  // SPRITES

  let sprites = [];

  // Avatar
  sprites.push({
    id: `A`,
    name: `avatar`,
    data: avatarSpriteData,
    dialog: undefined,
    position: {
      room: 0,
      x: 0,
      y: 0
    }
  });

  // SPRITES

  // GENERATE WIDE VIEW PLINTHS
  for (let i = 0; i < waterData.length; i++) {
    sprites.push(getWidePlinthSpriteData(waterData[i], plinthPositions[i], wideViewPlinthLeftData, 'left', 0));
    sprites.push(getWidePlinthSpriteData(waterData[i], plinthPositions[i], wideViewPlinthRightData, 'right', 1));
  }

  // GENERATE CLOSE UP PLINTH LABELS
  for (let i = 0; i < waterData.length; i++) {
    sprites.push(getLabelSpriteData(waterData[i], 'left', closeViewLabelLeftData, plinthLabelLeftPosition));
    sprites.push(getLabelSpriteData(waterData[i], 'right', closeViewLabelRightData, plinthLabelRightPosition));
  }

  // DIALOG
  let dialog = [];

  for (let i = 0; i < waterData.length; i++) {
    dialog.push(getDialog(waterData[i]));
  }

  // CONSTRUCT OUTPUT
  let output = '';

  // Front matter
  output += `${frontMatter.title}\n\n${frontMatter.version}\n\n${frontMatter.roomFormat}\n\n`;

  // Palettes
  output += getPaletteString(mainPalette);
  output += `\n\n`;
  for (let i = 0; i < waterData.length; i++) {
    output += getPaletteString(waterData[i].palette);
    output += `\n\n`;
  }

  // Rooms (and exits)
  output += getRoomString(middleRoom);
  output += `\n\n`;

  for (let i = 0; i < waterData.length; i++) {
    output += getRoomString(waterData[i].plinthRoom);
    output += `\n\n`;
  }

  // Tiles
  for (let i = 0; i < tiles.length; i++) {
    output += getTileString(tiles[i]);
    output += `\n\n`;
  }

  // Sprites
  for (let i = 0; i < sprites.length; i++) {
    output += getSpriteString(sprites[i]);
    output += `\n\n`;
  }

  for (let i = 0; i < dialog.length; i++) {
    output += getDialogString(dialog[i]);
    output += `\n\n`;
  }

  document.body.innerHTML = `<pre>${output}</pre>`;
}

function setPaletteData(water, i) {
  water.palette.id = i + 1;
  water.palette.name = `${water.prefix}-palette`
}

function setPlinthRoomData(water) {
  let roomData = {
    id: getNextRoomNumber(),
    data: plinthRoomData,
    name: water.prefix,
    palette: water.palette,
    exits: []
  }
  water.plinthRoom = roomData;
}

function setPlinthRoomExits(water) {
  water.plinthRoom.exits = [];
  // sides
  for (let x = 3; x < 13; x++) {
    for (let y = 3; y < 16; y++) {
      if (x !== 3 && x !== 12 && y != 3) continue;
      water.plinthRoom.exits.push({
        source: {
          x: x,
          y: y,
        },
        destination: {
          id: water.plinthRoom.return.id,
          x: water.plinthRoom.return.x,
          y: water.plinthRoom.return.y
        }
      });
    }
  }
}

function getWidePlinthSpriteData(water, position, data, suffix, offset) {
  return {
    id: getNextSpriteSymbol(),
    name: `${water.prefix}-wide-plinth-${suffix}`,
    data: data,
    dialog: `${water.prefix}-dialog`,
    position: {
      room: position.room,
      x: position.x + offset,
      y: position.y
    }
  }
}

function getLabelSpriteData(water, suffix, data, position) {
  return {
    id: getNextSpriteSymbol(),
    name: `${water.prefix}-plinth-label-${suffix}`,
    data: data,
    dialog: `${water.prefix}-dialog`,
    position: {
      room: water.plinthRoom.id,
      x: position.x,
      y: position.y
    }
  }
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

function getDialog(water) {
  return {
    name: `${water.prefix}-dialog`,
    text: `${water.title} by ${water.author}`
  }
}

function getPaletteString(palette) {
  return `PAL ${palette.id}\nNAME ${palette.name}\n${palette.background}\n${palette.tile}\n${palette.sprite}`;
}

function getRoomString(room) {
  console.log("Room string for ", room.name, room.exits.length, " exits")
  let output = `ROOM ${room.id}\n${room.data}\nNAME ${room.name}\n`
  for (let i = 0; i < room.exits.length; i++) {
    let exit = room.exits[i];
    output += `EXT ${exit.source.x},${exit.source.y} ${exit.destination.id} ${exit.destination.x},${exit.destination.y}\n`;
  }
  output += `PAL ${room.palette.id}`;
  return output;
}

function getTileString(tile) {
  return `TIL ${tile.id}\n${tile.data}\nNAME ${tile.name}\nWAL ${tile.wall}`;
}

function getSpriteString(sprite) {
  let output = `SPR ${sprite.id}\n${sprite.data}\nNAME ${sprite.name}`;
  if (sprite.dialog) {
    output += `\nDLG ${sprite.dialog}`;
  }
  output += `\nPOS ${sprite.position.room} ${sprite.position.x},${sprite.position.y}`;
  return output;
}

function getDialogString(dialog) {
  return `DLG ${dialog.name}\n${dialog.text}`;
}