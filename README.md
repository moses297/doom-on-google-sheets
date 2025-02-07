# DOOM on Google Sheets

This project runs the classic DOOM game inside a Google Sheets document using Google Apps Script and JavaScript. The game is rendered frame-by-frame by updating the background colors of spreadsheet cells.

## Features
- Runs DOOM inside Google Sheets.
- Captures frames from the game and renders them as colored spreadsheet cells.
- Updates only changed cells to optimize performance.
- Uses js-dos to emulate the DOS version of DOOM.

## How It Works
1. **JavaScript Rendering**: The HTML file loads DOOM using js-dos and captures frames at a reduced resolution (120x80).
2. **Frame Processing**: The script detects changed pixels and queues updates.
3. **Google Sheets Updates**: The `Code.gs` script updates the spreadsheet with new colors.

## Setup Instructions
1. Open a new Google Sheets document.
2. Go to **Extensions > Apps Script**.
3. Replace `Code.gs` with the provided script.
4. Add a new file named `Index.html` and paste the provided HTML code.
5. Save and refresh the spreadsheet.
6. Click **DOOM > Launch DOOM** in the Google Sheets menu.
7. Adjust the sheet grid to 120 columns × 80 rows.

## Known Issues
- **Performance is very slow**: Updating the sheet cell-by-cell is inefficient.
- **Manual Grid Setup**: The user must set the correct spreadsheet size manually.
- **Limited Colors**: Google Sheets does not support true color rendering.

## Try It Yourself
Instead of setting it up manually, you can try a pre-configured version here:
[DOOM on Google Sheets (Live)](https://docs.google.com/spreadsheets/d/11wws-heLAuix_GTvukOGRPmn4SMu6ZYYmkTZe4QXKXs/edit?usp=sharing)

## Demo Video
Watch a demonstration of DOOM running on Google Sheets:

[![DOOM on Google Sheets](https://img.youtube.com/vi/sDCdw9NveTg/0.jpg)](https://www.youtube.com/watch?v=sDCdw9NveTg)

Enjoy retro gaming in an unusual place!

