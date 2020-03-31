window.onload = generate;

function generate() {
  let output = '';
  // Front matter
  output += frontMatter;

  // Palettes
  output += defaultPalette;

  for (let i = 0; i < waterData.length; i++) {
    output += getPaletteData(i);
  }

  // Rooms
  output += middleRoom;

  // Tiles
  // Wall and windows for the main room
  output += wall + win;

  // Block and plinth sides for plinth rooms
  output += block + plinthCloseLeft + plinthCloseRight;

  // Avatar
  output += avatarSprite;

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