/*
 * Ayu build helper (fork-only file).
 *
 * Takes the combined midnight src CSS and appends the ayu palette overlay
 * (src/ayu/colors.css) to produce build/ayu.css. Kept in its own module so
 * upstream files (scripts/dev.js etc.) only need a 2-line hook, minimizing
 * merge conflicts when pulling from refact0r/midnight-discord.
 */

const fs = require('fs');
const path = require('path');

const ayuColorsFile = path.join(__dirname, '..', 'src', 'ayu', 'colors.css');
const ayuBuildFile = path.join(__dirname, '..', 'build', 'ayu.css');

function buildAyuFrom(combinedCSS) {
    const ayuColors = fs.readFileSync(ayuColorsFile, 'utf8');
    const output = combinedCSS + `/* ayu/colors.css */\n${ayuColors}\n`;
    fs.mkdirSync(path.dirname(ayuBuildFile), { recursive: true });
    fs.writeFileSync(ayuBuildFile, output);
    return output;
}

module.exports = { buildAyuFrom };
