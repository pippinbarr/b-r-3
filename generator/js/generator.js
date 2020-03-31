window.onload = generate;

let currentSpriteIndex = 0;
let currentSpriteRepeat = 1;
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function generate() {
  let output = '';

  // FRONT MATTER

  output += frontMatter;

  // PALETTES

  output += defaultPalette;

  for (let i = 0; i < waterData.length; i++) {
    output += getPaletteData(i);
  }

  // ROOMS

  output += middleRoom;

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

  // DIALOG
  for (let i = 0; i < waterData.length; i++) {
    output += getWidePlinthDialog(i);
  }

  document.body.innerHTML = `<pre>${output}</pre>`;
}

function getPaletteData(i) {
  let data = waterData[i];
  return `
PAL ${i+1}
NAME ${data.prefix}-palette
${data.palette.bg}
${data.palette.tile}
${data.palette.sprite}
`
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

function getWidePlinthDialog(i) {
  return `
DLG ${waterData[i].prefix}-dialog
${waterData[i].title} by ${waterData[i].author}
`;

}