window.onload = generate;

let roomNumber = 0; // Needs to start after the last gallery room
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
  let frontRoomExterior = {
    id: getNextRoomNumber(),
    name: `front-room-exterior`,
    data: frontRoomExteriorData,
    palette: mainPalette,
  }

  let middleRoomExterior = {
    id: getNextRoomNumber(),
    name: `middle-room-exterior`,
    data: middleRoomExteriorData,
    palette: mainPalette
  }

  let backRoomExterior = {
    id: getNextRoomNumber(),
    name: `back-room-exterior`,
    data: backRoomExteriorData,
    palette: mainPalette
  }

  let frontRoomInterior = {
    id: getNextRoomNumber(),
    name: `front-room-interior`,
    data: frontRoomInteriorData,
    palette: mainPalette
  }

  let middleRoomInterior = {
    id: getNextRoomNumber(),
    name: `middle-room-interior`,
    data: middleRoomInteriorData,
    palette: mainPalette
  }

  let backRoomInterior = {
    id: getNextRoomNumber(),
    name: `back-room-interior`,
    data: backRoomInteriorData,
    palette: mainPalette
  }

  // Add main room exits
  frontRoomExterior.exits = [
    `0,0 ${middleRoomExterior.id} 0,15`,
    `15,0 ${middleRoomExterior.id} 15,15`,
    `7,10 ${frontRoomInterior.id} 7,9`,
    `8,10 ${frontRoomInterior.id} 8,9`,
  ];

  middleRoomExterior.exits = [
    `0,0 ${backRoomExterior.id} 0,15`,
    `15,0 ${backRoomExterior.id} 15,15`,
    `0,15 ${frontRoomExterior.id} 0,0`,
    `15,15 ${frontRoomExterior.id} 15,0`,
  ];

  backRoomExterior.exits = [
    `0,15 ${middleRoomExterior.id} 0,0`,
    `15,15 ${middleRoomExterior.id} 15,0`,
    `7,5 ${backRoomInterior.id} 7,6`,
    `8,5 ${backRoomInterior.id} 8,6`,
  ];


  frontRoomInterior.exits = [
    `7,10 ${frontRoomExterior.id} 7,11`,
    `8,10 ${frontRoomExterior.id} 8,11`,
  ];
  for (let x = 2; x <= 13; x++) {
    frontRoomInterior.exits.push(
      `${x},0 ${middleRoomInterior.id} ${x},15`,
      `${x},0 ${middleRoomInterior.id} ${x},15`,
    )
  }

  middleRoomInterior.exits = [];
  for (let x = 2; x <= 13; x++) {
    middleRoomInterior.exits.push(
      `${x},0 ${backRoomInterior.id} ${x},15`,
      `${x},0 ${backRoomInterior.id} ${x},15`,
      `${x},15 ${frontRoomInterior.id} ${x},0`,
      `${x},15 ${frontRoomInterior.id} ${x},0`,
    )
  }

  backRoomInterior.exits = [
    `7,5 ${backRoomExterior.id} 7,4`,
    `8,5 ${backRoomExterior.id} 8,4`,
  ];
  for (let x = 2; x <= 13; x++) {
    backRoomInterior.exits.push(
      `${x},15 ${middleRoomInterior.id} ${x},0`,
      `${x},15 ${middleRoomInterior.id} ${x},0`,
    )
  }

  // Add plinth exits
  // Duplicate the water data so we can use it to populate the exits
  let waterCopy = waterData.slice();
  setTransitions(frontRoomInterior, waterCopy);
  setTransitions(middleRoomInterior, waterCopy);
  setTransitions(backRoomInterior, waterCopy);

  let galleryRooms = [frontRoomExterior, frontRoomInterior, middleRoomExterior, middleRoomInterior, backRoomExterior, backRoomInterior];

  // TILES

  let tiles = [];

  tiles.push({
    id: `a`,
    name: `wall-v`,
    wall: true,
    data: wallVTileData
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

  tiles.push({
    id: `f`,
    name: `wall-h`,
    wall: true,
    data: wallHData
  });

  tiles.push({
    id: `g`,
    name: `sw-corner`,
    wall: true,
    data: swCornerData
  });

  tiles.push({
    id: `h`,
    name: `se-corner`,
    wall: true,
    data: seCornerData
  });

  tiles.push({
    id: `i`,
    name: `roof`,
    wall: true,
    data: roofData
  });

  tiles.push({
    id: `j`,
    name: `roof-door`,
    wall: false,
    data: roofDoorData
  });

  tiles.push({
    id: `k`,
    name: `ne-corner`,
    wall: true,
    data: neCornerData
  });

  tiles.push({
    id: `l`,
    name: `nw-corner`,
    wall: true,
    data: nwCornerData
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
      room: 24,
      x: 7,
      y: 13
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
  output += getRoomString(frontRoomExterior);
  output += `\n\n`;

  output += getRoomString(middleRoomExterior);
  output += `\n\n`;

  output += getRoomString(backRoomExterior);
  output += `\n\n`;

  output += getRoomString(frontRoomInterior);
  output += `\n\n`;

  output += getRoomString(middleRoomInterior);
  output += `\n\n`;

  output += getRoomString(backRoomInterior);
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

function setTransitions(room, waters) {
  // room.exits = [];
  let positions = plinthPositions.filter(a => a.room === room.id);
  for (let i = 0; i < positions.length; i++) {
    let water = waters.shift();
    if (!water) {
      console.error("Ran out of water.");
      return;
    }
    water.plinthRoom.return = {
      id: positions[i].room,
      x: positions[i].x,
      y: positions[i].y + 1
    };
    for (let x = 0; x <= 1; x++) {
      for (let y = -2; y <= -1; y++) {
        room.exits.push(
          `${positions[i].x + x},${positions[i].y + y} ${water.plinthRoom.id} 7,6`
        );
      }
    }

    water.plinthRoom.exits = [];

    // sides
    for (let x = 3; x < 13; x++) {
      for (let y = 3; y < 16; y++) {
        if (x !== 3 && x !== 12 && y != 3) continue;
        water.plinthRoom.exits.push(
          `${x},${y} ${water.plinthRoom.return.id} ${water.plinthRoom.return.x},${water.plinthRoom.return.x}`
        );
      }
    }
  }
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
  // console.log("Room string for ", room.name, room.exits.length, " exits")
  let output = `ROOM ${room.id}\n${room.data}\nNAME ${room.name}\n`
  if (room.exits) {
    for (let i = 0; i < room.exits.length; i++) {
      let exit = room.exits[i];
      output += `EXT ${exit}\n`;
    }
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