const fs = require('node:fs/promises');

async function read(path) {
  try {
    return fs.readFile(path, { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    read
};
