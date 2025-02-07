function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('DOOM')
    .addItem('Launch DOOM', 'showDoomSidebar')
    .addToUi();
}

function showDoomSidebar() {
  const html = HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('DOOM')
    .setWidth(700);
  SpreadsheetApp.getUi().showSidebar(html);
}

// Update only changed cells
function updateCells(changedCells) {
  const DISPLAY_WIDTH = 120; // Match the resolution in the HTML/JavaScript
  const DISPLAY_HEIGHT = 80; // Match the resolution in the HTML/JavaScript
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Read the current background colors of the entire range
  const range = sheet.getRange(1, 1, DISPLAY_HEIGHT, DISPLAY_WIDTH);
  const currentBackgrounds = range.getBackgrounds();
  
  // Prepare a 2D array for batch update
  const backgroundColors = currentBackgrounds; // Start with the current colors
  
  // Populate the backgroundColors array with changes
  changedCells.forEach(change => {
    const { row, col, color } = change;
    backgroundColors[row][col] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  });
  
  // Update the entire range at once
  range.setBackgrounds(backgroundColors);
  
  return true;
}
